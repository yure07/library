import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

interface YearsType{
  years: number[];
}

const SearchByYearLaunch:React.FC<YearsType> = ({years}) => {
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

  const searchResults = data.map ? Object.values(data).flatMap((info: DataItem) => (
    info.livro.map((livro: LivroType, index: number) => {
      if (
        parseInt(livro.anoPublicacao) >= years[0] 
          &&  
        parseInt(livro.anoPublicacao) <= years[1]) {
        return (
          <ContainerItem key={index}>
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
              <p>Ano de Publicação: {livro.anoPublicacao}</p>
            </div>
          </ContainerItem>
        );
      } else return null;
    })
  )) : (
    <TitleLoading>Buscando dados...</TitleLoading>
  );

  return <>{searchResults}</>
}

export default SearchByYearLaunch