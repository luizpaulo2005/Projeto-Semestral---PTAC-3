import Head from 'next/head'
import styles from '/styles/Home.module.css'
import MostraAutor from '../components/mostrarautor'
import Link from 'next/link'
import Cabecalho from '../components/cabecalho'

export default function TodosAutores(){
  return(
    <div>
    <Cabecalho/>
    <div>
    <div className={styles.container}>
    <Head>
    <title>Todos os Autores</title>
    </Head>      
      <div className={styles.grid}>
          <MostraAutor/>
    </div>  
      <footer className={styles.footer}>
     <Link href="/"><a class="btn"><button class="btn btn-success">Página Inicial</button></a></Link>
      </footer>
      </div>
    </div>
    </div>
  )
}