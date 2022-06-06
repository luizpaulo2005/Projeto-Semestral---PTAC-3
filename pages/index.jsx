import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Página Inicial</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Seja bem vindo a minha biblioteca
        </h1>
        <div className={styles.grid}>
          <Link href="/posts/log"><a className={styles.card}>
            <h2>Página de Login &rarr;</h2>
            <p>Clique aqui e faça login na nossa biblioteca</p>
          </a></Link>

          <Link href="/posts/insertlivro"><a className={styles.card}>
            <h2>Cadastrar Livros &rarr;</h2>
            <p>Clique aqui para cadastrar seu livro em nossa coleção</p>
          </a></Link>

          <Link href="/posts/insertautor"><a className={styles.card}>
            <h2>Cadastrar Autores &rarr;</h2>
            <p>Clique aqui para cadastrar um autor em nossa coleção</p>
          </a></Link>

          <Link href="/posts/allbooks"><a className={styles.card}>
            <h2>Ver Livros &rarr;</h2>
            <p>Clique aqui para ver os livros cadastrados em nossa coleção</p>
          </a></Link>

          <div className={styles.grid}>
          <Link href="/posts/allauthors"><a className={styles.card}>
            <h2>Ver Autores &rarr;</h2>
            <p>Clique aqui para ver os autores cadastrados em nossa coleção</p>
          </a></Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
          Projeto de PTAC 3 - Feito por Luiz Paulo - INFO 5 - 2022
      </footer>
    </div>
  )
}
