import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: #f0fff0;
`
interface dataType{
  map?: any
}

interface PessoaType {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
}

interface LivroType {
  titulo: string;
  autor: string;
  editora: string;
  anoPublicacao: string;
  dataEmprestimo: string;
}

interface DataItem {
  pessoa: PessoaType[];
  livro: LivroType[];
  id: number;
}

const Books:React.FC = () => {
  const [data, setData] = useState<dataType>({})

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get('https://apigenerator.dronahq.com/api/ef8I4ukd/librarySystem')
        setData(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  },[])

  return(
    <Container>
      {data && 
        Object.values(data).map((info: DataItem) => (
        <div key={info.id}>
            <p>{info.id}</p>
            <p>Pessoa:</p>
            {info.pessoa.map((pessoa: PessoaType, index: number) => (
              <p key={index}>{`${pessoa.nome} - ${pessoa.email}`}</p>
            ))}
            <p>Livro:</p>
            {info.livro.map((livro: LivroType, index: number) => (
              <p key={index}>{`${livro.titulo} - ${livro.autor}`}</p>
            ))}
        </div>
      ))}
    </Container>
  )
}

export default Books