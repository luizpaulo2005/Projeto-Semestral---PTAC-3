import api from '../api/api'
import CardAutor from './cardautor'
import {useEffect, useState} from 'react'

export default function MostraAutor(){
  const [autores, setAutores] = useState([])

	useEffect(() => {
		api
			.get('/')
			.then(response => {
				setAutores(response.data)
			})
			.catch(err => {
				console.log('Erro: ', err)
			})
	}, [])
  return(
    	<>
			{
				autores.map(autor => {
					return (
            <>
							<CardAutor key={autor.id} nome={autor.nome} sobrenome={autor.sobrenome} datan={autor.datanasc} />
            </>
					)
				})
			}
		</>
  )
}