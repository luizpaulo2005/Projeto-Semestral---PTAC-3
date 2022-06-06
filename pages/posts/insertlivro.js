import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function InsertLivro(){

const [livros, setLivros] = useState({
    autor_id:"",
    titulo: "",
    editora: "",
    data_publicacao: "",
    preco: ""
  });
  let router = useRouter();

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLivros({ ...livros, [id]: value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
    autor_id: livros.autor_id,
    titulo: livros.titulo,
    editora: livros.editora, 
    data_publicacao: livros.data_publicacao,
    preco: livros.preco
    }
    console.log(data);
    const response = await axios.post("https://App-PTAS-2.luizpaulo2005.repl.co/inserirl", data)
   if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/posts/allbooks')
    }
    console.log(response)

  }
  
  
  return (
    <div className={styles.container}>
    <Head>
    <title>Cadastro de Livro</title>
    </Head>
    <div>
      <ToastContainer/>
         <form onSubmit={handleSubmit}>
           <fieldset class="border rounded p-2">
            <legend>Cadastrar Livro</legend>
          <div class="input-group mb-3">
  <span class="input-group-text">ID do Autor</span>
  <input id="autor_id" type="text" value={livros.autor_id} onChange={handleInputChange} class="form-control" placeholder="Digite o ID do autor do livro"/>
          </div>
         <div class="input-group mb-3">
  <span class="input-group-text">Título</span>
  <input id="titulo" type="text" value={livros.titulo} onChange={handleInputChange} class="form-control" placeholder="Digite o Título do Livro"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Editora</span>
  <input  id="editora" type="text" value={livros.editora} onChange={handleInputChange} class="form-control" placeholder="Digite o nome da Editora do Livro"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Data de Publicação</span>
  <input id="data_publicacao" type="date" value={livros.data_publicacao} onChange={handleInputChange} class="form-control"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Preço</span>
  <input id="preco" type="text" value={livros.preco} onChange={handleInputChange} class="form-control" placeholder="Digite o Preço do Livro"/>
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
