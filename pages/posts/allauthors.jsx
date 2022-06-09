import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import Cabecalho from '../components/cabecalho'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const response = await axios.get('https://ORM-Projeto-Final.undertak3r.repl.co/autores')
  const autores = await response.data
  return {
    props: {
      autores
    }
  }
}

export default function TodosAutores({autores}){

  let router = useRouter();
  
  const handleDelete = async event => {
    event.preventDefault()
    const { id } = event.target
    const data = {
      id: Number(id)
    }
    const response = await axios.delete(`https://ORM-Projeto-Final.undertak3r.repl.co/autores/${id}`)

    if (!response.statusText === "OK") {
      toast.error("Erro ao excluir a categoria!");
    } else {
      router.push('/posts/allauthors')
    }
  }
  
  return(
    <div>
    <Cabecalho/>
    <div>
    <div className={styles.container}>
    <Head>
    <title>Todos os Autores</title>
    </Head>      
      <div className={styles.grid}>
         {autores.map(({id, nome, sobrenome})=> (
          <div className={styles.card}>
          <Link href={`/posts/autor${id}`}><a>
          <h2> {id} - {nome} {sobrenome} &rarr;</h2>
          </a></Link>
          <button class="btn btn-secondary" id={id} onClick={handleDelete}>Excluir</button>
          </div>
        )
)}
    </div>  
      <footer className={styles.footer}>
     <Link href="/"><a class="btn"><button class="btn btn-success">Página Inicial</button></a></Link>
      </footer>
      </div>
    </div>
    </div>
  )
}

/* 
 <div className={styles.card}>
            <Link href="/p"><a >
            <h2> &rarr;</h2>
            </a></Link>
            <p class="mb-1">Data de Nascimento: {props.datan}</p>
            <button id={props.id} onclick={handleDelete}  class="btn btn-secondary">Deletar</button>{" "}
            <button class="btn btn-primary">Atualizar</button>
            </div>
*/

/* 

*/