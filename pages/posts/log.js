import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'

export default function Login(){
  return (
    <div className={styles.container}>
      <Head>
      <title>Página de Login</title>
      </Head>
           <form>
      <fieldset class="border rounded p-2">
      <legend>Login</legend>
        <div class="input-group mb-3">
  <span class="input-group-text">E-mail</span>
  <input type="email" class="form-control" placeholder="Digite seu e-mail"/>
          </div>
           <div class="input-group mb-3">
  <span class="input-group-text">Senha</span>
  <input type="password" class="form-control" placeholder="Digite a sua senha"/>
          </div>
             <Link href="/"><a class="btn btn-secondary">Página Inicial</a></Link> {" "}
               <button type="submit" class="btn btn-primary">Entrar</button>{" "}
        <button class="btn btn-danger">Esqueci a Senha</button>
      </fieldset>
      </form>
    </div>
  )
}