import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function InserirAutor(){

const [autores, setAutores] = useState({
    nome: "",
    sobrenome: "",
    datanasc: ""
  });
  let router = useRouter();
  
const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutores({ ...autores, [id]: value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    nome: autores.nome,
    sobrenome: autores.sobrenome, 
    datanasc: autores.datanasc,
    }
    console.log(data);
    const response = await axios.post("https://App-PTAS-2.luizpaulo2005.repl.co/inserir", data)
     if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/allauthors')
    }
    console.log(response)

  }
  
  return (
    <div className={styles.container}>
    <Head>
    <title>Cadastro de Autor</title>
    </Head>
      <div>
      <ToastContainer/>
      <form onSubmit={handleSubmit}>
      <fieldset class="border rounded p-2">
      <legend>Cadastro de Autor</legend>
        <div class="input-group mb-3">
  <span class="input-group-text">Nome</span>
  <input id="nome" type="text" value={autores.nome} onChange={handleInputChange} class="form-control" placeholder="Digite o nome do autor"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Sobrenome</span>
  <input id="sobrenome" type="text" value={autores.sobrenome} onChange={handleInputChange} class="form-control" placeholder="Digite o sobrenome do autor"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Data de Nascimento</span>
  <input id="datanasc" type="date" value={autores.datanasc} onChange={handleInputChange} class="form-control"/>
          </div>
        <div>
             <Link href="/"><a class="btn btn-secondary">Página Inicial</a></Link> {" "}
               <button type="submit" class="btn btn-primary">Cadastrar</button>
             </div>
      </fieldset>
      </form>
        </div>
    </div>
    
  )
}
