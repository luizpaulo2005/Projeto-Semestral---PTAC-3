import Head from 'next/head'
import styles from '/styles/Home.module.css'
import MostraLivro from '../components/mostrarlivro'
import Link from 'next/link'
import Cabecalho from '../components/cabecalho'

export default function TodosLivros(){
  return(
    <div>
    <Cabecalho/>
    <div className={styles.container}>
    <Head>
    <title>Todos os Livros</title>
    </Head>
      <div className={styles.grid}>
          <MostraLivro/>
    </div>  
      <footer className={styles.footer}>
        <Link href="/"><a class="btn"><button class="btn btn-success">Página Inicial</button></a></Link>
      </footer>
      </div>
    </div>
  )
}