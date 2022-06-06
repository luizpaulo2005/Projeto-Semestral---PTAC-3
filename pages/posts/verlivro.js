/*

import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
// import { getSortedPostsData } from '../lib/posts'

// EXEMPLO COM CONTEÚDO DE POSTS LOCAL
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// EXEMPLO COM CONTEÚDO DE POSTS DE UMA API EXTERNA
export const getStaticProps = async () => {
  const response = await axios.get('https://App-PTAS-2.luizpaulo2005.repl.co')
  console.log(response);
  const allPostsData = await response.data
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <section>
        <p>André Violin</p>
        <p>
          <Link href="/posts/insertlivro">
            <a>Adicionar Livro</a>
          </Link>
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, attributes }) => (
            <li key={id}>
              {titulo}
              <br />
              {id}
              <br />
              {editora}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
*/