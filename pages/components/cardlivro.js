import Link from 'next/link'
import styles from '/styles/Home.module.css'
import axios from 'axios'

export default function CardLivro(props){
  return(
    <>
          <div className={styles.card}>
            <Link href="{}"><a>
            <h2>{props.titulo} &rarr;</h2>
            </a></Link>
            <p>{props.autor}</p>
            <p>{props.datap}</p>
            <button class="btn btn-secondary">Deletar</button>{ " "}
            <button class="btn btn-primary">Atualizar</button>
            </div>
    </>
  )
}