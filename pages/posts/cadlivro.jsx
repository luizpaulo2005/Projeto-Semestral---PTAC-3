import axios from 'axios'
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getStaticProps = async () => {
  const response = await axios.get('https://ORM-Projeto-Final.undertak3r.repl.co/livros')
  const categorias = await response.data
  return {
    props: {
      livros
    }
  }
}

export default function Add({ livros }) {
  const [values, setValues] = useState({
    autorId: "",
    titulo: "",
    editora: "",
    data_publicacao: "",
    preco: ""
  });

  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyFieldCheck = Object.values(values).some(
      (element) => element === ""
    )
    if (emptyFieldCheck) {
      toast.error("Preencha todos os campos!");
      return
    }
    const data = {
      ...values
    }

    const response = await axios.post("https://ORM-Projeto-Final.undertak3r.repl.co/livros", data)


    if (!response.statusText === "OK") {
      toast.error("Erro ao adicionar post!");
    } else {
      router.push('/')
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const { autorId, titulo } = values;

  return (
    <div>
      <Link href="/">
        <a>Voltar</a>
      </Link>
      <h2>Adicionar Postagem</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoria_id">Categoria</label>
          <select
            id="categoria_id"
            value={categoria_id}
            onChange={handleInputChange}
          >
            {categorias.map(({ id, nome }) => (
              <option key={id} value={id}>{nome}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="data">Data</label>
          <input
            id="data"
            type="date"
            value={data}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="conteudo">Conteúdo</label>
          <textarea
            id="conteudo"
            type="text"
            value={conteudo}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Adicionar Post</button>
      </form>
    </div>
  );
}