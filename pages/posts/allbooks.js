import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import Cabecalho from '../components/cabecalho'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const response = await axios.get('https://ORM-Projeto-Final.undertak3r.repl.co/livros')
  const livros = await response.data
  return {
    props: {
      livros
    }
  }
}

export default function TodosLivros({ livros }){

    let router = useRouter();
  
  const handleDelete = async event => {
    event.preventDefault()
    const { id } = event.target
    
    const response = await axios.delete(`https://ORM-Projeto-Final.undertak3r.repl.co/livros/${id}`,)

    if (!response.statusText === "OK") {
      toast.error("Erro ao excluir a categoria!");
    } else {
      router.push('/posts/allbooks')
    }
  }
  
  return(
        <div>
        <Cabecalho/>
        <div className={styles.container}>
        <Head>
        <title>Todos os Livros</title>
        </Head>
        <div className={styles.grid}>
        {livros.map(({id, titulo, editora, datapublicacao, preco})=> (
          <div className={styles.card}>
          
          <h2> {id} - {titulo} &rarr;</h2>
          
          <p>{editora}</p>
          <p>{datapublicacao}</p>
          <button class="btn btn-secondary" id={id} onClick={handleDelete}>Excluir</button>{" "}
          <Link href={`/posts/livro/${id}`}><a><button class="btn btn-secondary">Ver mais</button></a></Link>
          </div>
        )
)}
        </div>  
        <footer className={styles.footer}>
        <Link href="/"><a class="btn"><button class="btn btn-success">Página Inicial</button></a></Link>
        </footer>
        </div>
        </div>
  )
}