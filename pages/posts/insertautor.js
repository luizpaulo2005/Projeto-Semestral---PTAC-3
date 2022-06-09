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
    datanascimento: ""
  });
  let router = useRouter();

  
 const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(autores).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos!");
      return
    }
    const data = {
      ...autores
    }

    const response = await axios.post("https://ORM-Projeto-Final.undertak3r.repl.co/autores", data)


    if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/allauthors')
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAutores({ ...autores, [id]: value });
  };

  const { nome, sobrenome, datanascimento } = autores;
  
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
  <input id="datanascimento" type="date" value={autores.datanascimento} onChange={handleInputChange} class="form-control"/>
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

/*
export default function Card1() {
  const [autores, setAutores] = useState({
    nome: "",
    sobrenome: "",
    data_de_nascimento: ""
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
    data_de_nascimento: autores.data_de_nascimento,
    }
    console.log(data);
    const response = await axios.post("https://skeleton-nodejs.guilhermetombin.repl.co/inserir", data)
     if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/Pagina_autores')
    }
    console.log(response)

  }
  
  return (
    <>
      <div className={styles.loginbox}>
        <h2>Autores</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input id="nome"
              type="text"
              value={autores.nome}
              onChange={handleInputChange} />
            <label>Nome</label>
          </div>

          <div className={styles.userbox}>
            <input id="sobrenome"
              type="text"
              value={autores.sobrenome}
              onChange={handleInputChange} />
            <label>Sobrenome</label>
          </div>

          <div className={styles.userbox}>
            <input id="data_de_nascimento"
              type="date"
              value={autores.data_de_nascimento}
              onChange={handleInputChange} />
            <label>Data de nascimento</label>
          </div>
          <center>
            <button type="submit">CADASTRAR</button>
          </center>
        </form>
      </div>
    </>
  )
}
*/