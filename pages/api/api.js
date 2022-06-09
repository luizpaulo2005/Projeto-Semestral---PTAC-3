import axios from 'axios'

const api = axios.create({
  baseURL: "https://ORM-Projeto-Final.undertak3r.repl.co"
})

export default api;