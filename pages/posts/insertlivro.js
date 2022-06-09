import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export const getStaticProps = async () => {
  const response = await axios.get('https://ORM-Projeto-Final.undertak3r.repl.co/autores')
  const autores = await response.data
  return {
    props: {
      autores
    }
  }
}

export default function InsertLivro({autores}){

  const [livro, setLivro] = useState({
    autorId: "",
    titulo: "",
    editora: "",
    datapublicacao: "",
    preco: ""
  });

  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(livro).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos!");
      return
    }
    const data = {
      ...livro
    }

    const response = await axios.post("https://ORM-Projeto-Final.undertak3r.repl.co/livros", data)


    if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/allbooks')
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLivro({ ...livro, [id]: value });
  };

  const { autorId, titulo, editora, datapublicacao, preco } = livro;
  
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
          <select class="form-control" id="id" onChange={handleInputChange}>
            <option selected disabled>Selecione o autor do Livro </option>
            {autores.map(({ id, nome, sobrenome }) => (
              <option key={id} value={livro.autorId}>{nome} {sobrenome}</option>
            ))}
          </select>
        </div>
         <div class="input-group mb-3">
  <span class="input-group-text">Título</span>
  <input id="titulo" type="text" value={livro.titulo} onChange={handleInputChange} class="form-control" placeholder="Digite o Título do Livro"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Editora</span>
  <input  id="editora" type="text" value={livro.editora} onChange={handleInputChange} class="form-control" placeholder="Digite o nome da Editora do Livro"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Data de Publicação</span>
  <input id="datapublicacao" type="date" value={livro.datapublicacao} onChange={handleInputChange} class="form-control"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Preço</span>
  <input id="preco" type="text" value={livro.preco} onChange={handleInputChange} class="form-control" placeholder="Digite o Preço do Livro"/>
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