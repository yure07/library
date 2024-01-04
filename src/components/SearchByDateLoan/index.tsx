import { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const ContainerItem = styled.article`
  display: flex;
  flex-direction: column;
  line-height: 150%;
  width: 320px;
  font-family: 'Montserrat';
  margin: 16px 0;
`

const TitleLoading = styled.p`
  font-family: 'Montserrat';
  font-size: 22px;
  margin: 16px auto;
`

interface dateType{
  date: string
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

const SearchByDate:React.FC<dateType> = ({ date }) => {
  const [data, setData] = useState<Record<string, DataItem>>({})

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get('https://apigenerator.dronahq.com/api/ef8I4ukd/librarySystem')
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  },[])

  const ListBooksByDate = data.map ? Object.values(data).flatMap((info: DataItem) => (
    info.livro.map((livro: LivroType, index: number) => {
      if (livro.dataEmprestimo === date) {
        return(
          <ContainerItem key={info.id}>
            {info.pessoa.map((pessoa: PessoaType, indexB: number) => (
              <div key={indexB}>
                <p>Pessoa: {pessoa.nome}</p>
                <p>Email: {pessoa.email}</p>
                <p>CPF: {pessoa.cpf}</p>
              </div>
            ))}
            <div key={index}>
              <p>Livro: {livro.titulo}</p>
              <p>Autor: {livro.autor}</p>
              <p>Data de Empréstimo: {livro.dataEmprestimo}</p>
            </div>
          </ContainerItem>
        );
      }
    })
  )) : (
    <TitleLoading>Buscando dados...</TitleLoading>
  )

  return <>{ListBooksByDate}</>
}

export default SearchByDate