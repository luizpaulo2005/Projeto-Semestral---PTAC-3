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
  const response = await axios.get(`https://ORM-Projeto-Final.undertak3r.repl.co/autores/${id}`)
 const autor = await response.data
  console.log(autor)
  return {
    props: {
      autor
    }
  }
}

export default function AutorSolo({autor}){
  return(

    <div className={styles.container}> 
      <Head>
      <title>Autor {autor.id}</title>
      </Head>
            <div className={styles.card}>
            <h2> {autor.id} - {autor.nome} {autor.sobrenome} &rarr;</h2>
            <p class="mb-1">Data de Nascimento: {autor.datanascimento}</p>
            </div>
      <footer>
      <Link href="/"><a class="btn"><button class="btn btn-success">Página Inicial</button></a></Link>
      </footer>
    </div>
      
  )
}