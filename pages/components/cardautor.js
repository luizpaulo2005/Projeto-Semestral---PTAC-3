import Link from 'next/link'
import styles from '/styles/Home.module.css'
import axios from 'axios'
import {useRouter} from 'next/router'

const handleDelete = async event => {
  event.preventDefault()
  const {id} = event.target
  const data = {
    id
  }
  const response = await axios.delete(`https://App-PTAS-2.luizpaulo2005.repl.co/deletar`, data)
}

export default function CardAutor(props){
  return(
    <div className={styles.card}>
            <Link href="/p"><a >
            <h2>{props.nome} {props.sobrenome} &rarr;</h2>
            </a></Link>
            <p class="mb-1">Data de Nascimento: {props.datan}</p>
            <button id={props.id} onclick={handleDelete}  class="btn btn-secondary">Deletar</button>{" "}
            <button class="btn btn-primary">Atualizar</button>
            </div>
  )
}