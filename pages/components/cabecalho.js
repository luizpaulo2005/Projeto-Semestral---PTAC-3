import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Cabecalho(){
  return(
  <div className={styles.header}>
  <div className={styles.pinicial}>
  <Link href="/"><a>Página Inicial</a></Link>
  </div>
  <Link href="/posts/insertautor"><a class="btn btn-secondary">Cadastrar Autor</a></Link>{" "}
  <Link href="/posts/insertlivro"><a class="btn btn-secondary">Cadastrar Livro</a></Link>{" "}
  <Link href="/posts/allauthors"><a class="btn btn-secondary">Ver Autor</a></Link>{" "}
  <Link href="/posts/allbooks"><a class="btn btn-secondary">Ver Livro</a></Link>{" "}
  <Link href="/posts/log"><a class="btn btn-secondary">Login</a></Link>{" "}
  </div>
  )
}