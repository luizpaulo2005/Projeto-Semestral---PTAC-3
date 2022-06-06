import api from '../api/api'
import CardLivro from './cardlivro'
import {useEffect, useState} from 'react'

export default function MostraLivro(){
  const [livros, setLivros] = useState([])

	useEffect(() => {
		api
			.get('/livros')
			.then(response => {
				setLivros(response.data)
			})
			.catch(err => {
				console.log('Erro: ', err)
			})
	}, [])
  return(
    	<>
			{
				livros.map(livro => {
					return (
            <>
							<CardLivro key={livro.id} titulo={livro.titulo} autor={livro.editora} datap={livro.data_publicacao} />
            </>
					)
				})
			}
		</>
  )
}