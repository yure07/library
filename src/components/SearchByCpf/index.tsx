import axios from "axios";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

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

interface ValueType{
  value: string
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

const SearchByCpf:React.FC<ValueType> = ({value}) => {
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
    info.pessoa.map((pessoa: PessoaType, index: number) => {
      if (pessoa.cpf.includes(value)) {
        return (
          <ContainerItem key={info.id}>
            <div key={index}>
              <p>Pessoa: {pessoa.nome}</p>
              <p>Email: {pessoa.email}</p>
              <p>CPF: {pessoa.cpf}</p>
            </div>
            {info.livro.map((livro: LivroType, indexB: number) => (
              <div key={indexB}>
                <p>Livro: {livro.titulo}</p>
                <p>Autor: {livro.autor}</p>
                <p>Data de Empréstimo: {livro.dataEmprestimo}</p>
              </div>
            ))}
          </ContainerItem>
        );
      } else return null
    })
  )) : (
    <TitleLoading>Buscando dados...</TitleLoading>
  );

  return <>{searchResults}</>
};

export default SearchByCpf;