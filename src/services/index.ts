import axios from "axios"

const API_KEY = process.env.REACT_APP_BOOK_API_KEY

const $host = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes"
})

$host.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: API_KEY,
  }
  return config
})

export { $host }

