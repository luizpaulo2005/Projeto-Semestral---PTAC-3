import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useState } from 'react'

export const getServerSideProps = async (context) => {
  const id = context.query.id
  const response = await axios.get(`https://ORM-Projeto-Final.undertak3r.repl.co/livros/${id}`)
 const livro = await response.data
  console.log(livro)
  return {
    props: {
      livro
    }
  }
}

export default function LivroSolo({livro}){
  return(

    <div className={styles.container}> 
      <Head>
      <title>Livro {livro.id}</title>
      </Head>
          <div className={styles.card}>
          <h2> {livro.id} - {livro.titulo} &rarr;</h2>
          <p>{livro.editora}</p>
          <p>{livro.datapublicacao}</p>
          </div>
      <footer>
      <Link href="/"><a class="btn"><button class="btn btn-success">Página Inicial</button></a></Link>
      <Link href="/posts/allbooks"><a class="btn"><button class="btn btn-primary">Página Anterior</button></a></Link>
      </footer>
    </div>
      
  )
}