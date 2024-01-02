import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"

const ContainerItem = styled.article`
  display: flex;
  flex-direction: column;
  line-height: 150%;
  width: 320px;
  font-family: 'Montserrat';
  margin: 16px 0;
`

const DividerItem = styled.hr`
  height: 140px;
  position: absolute;
  border: 1px solid #d3d3d3;
  align-self: flex-end;
`
const TitleLoading = styled.p`
  font-family: 'Montserrat';
  font-size: 22px;
  margin: 16px auto;
`

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
  map?: any
}

const AllBooks:React.FC = () => {
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

  
  const ListBooks = data.map ? (Object.values(data).map((info: DataItem) => (
    <ContainerItem key={info.id}>
      {info.pessoa.map((pessoa: PessoaType, index: number) => (
        <div key={index}>
          <p>Pessoa: {pessoa.nome}</p>
          <p>Email: {pessoa.email}</p>
          <p>CPF: {pessoa.cpf}</p>
        </div>
      ))}
      {info.livro.map((livro: LivroType, index: number) => (
        <div key={index}>
          <p>Livro: {livro.titulo}</p>
          <p>Autor: {livro.autor}</p>
          <p>Data de Empréstimo: {livro.dataEmprestimo}</p>
        </div>
      ))}
      <DividerItem/>
    </ContainerItem>
  ))) : (
    <TitleLoading>Carregando dados...</TitleLoading>
  )

  return <>{ListBooks}</>
}

export default AllBooks