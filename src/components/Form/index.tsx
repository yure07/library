import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
        
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  @media (max-width: 992px){
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px){
    flex-direction: column;
  }
`

const TitleSlogan = styled.h1`
  width: 180px;
  text-align: center;
  margin: 16px auto;
  font-family: 'Fraunces';
  font-size: 24px;
`

const ContainerGeneralForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
  font-family: 'Montserrat';

  @media (max-width: 992px){
    width: 56%;
    align-items: center;
  }

  @media (max-width: 768px){
    width: 100%;
  }

  @media (max-width: 600px){
    flex-direction: column;
    row-gap: 16px;
    margin-top: 16px;
  }
`

const ContainerData1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  height: 70%;

  @media (max-width: 992px){
    justify-content: initial;
    row-gap: 16px;
    height: 320px;
  }

  @media (max-width: 600px){
    width: 100%;
    row-gap: 12px;
  }
`

const ContainerData2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  margin-top: -12px;

  @media (max-width: 992px){
    width: 100%;
    align-items: center;
    row-gap: 16px;
  }
`

const TitleForm = styled.h1`
  font-size: 18px;
  text-align: center;
`

const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
`

const SpanLabel = styled.span`
  font-size: 14px;
  margin-bottom: 2px;
  margin-left: 6px;
`

const Input = styled.input`
  width: 94%;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #777;
  padding: 0 8px;
  font-size: 16px;
`

const TitleFormData = styled(TitleForm)`
  text-align: inherit;
`

const InputData = styled(Input)`
  width: 200px;
`

const BtnSubmit = styled.button`
  margin: 16px auto;
  width: 150px;
  height: 50px;
  font-size: 22px;
  font-family: 'Montserrat';
  font-weight: 700;
  background-color: #000;
  color: #f0fff0;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s;
  
  &:hover{
    box-shadow: 5px 5px 10px #000;
    transform: scale(1.1);
  }
`

interface PersonType {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
}

interface BookType {
  titulo: string;
  autor: string;
  editora: string;
  anoPublicacao: string;
  dataEmprestimo: string;
}

const Form:React.FC = () => {
  const [valuesPerson, setValuesPerson] = useState<PersonType>({
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  })

  const [valuesBook, setValuesBook] = useState<BookType>({
    titulo: '',
    autor: '',
    editora: '',
    anoPublicacao: '',
    dataEmprestimo: ''
  })

  const handleChangePerson = (e: ChangeEvent<HTMLInputElement>) => {
    setValuesPerson({
      ...valuesPerson,
      [e.target.name]: e.target.value
    });
  }

  const handleChangeBook = (e: ChangeEvent<HTMLInputElement>) => {
    setValuesBook({
      ...valuesBook,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        await axios.post('https://apigenerator.dronahq.com/api/ef8I4ukd/librarySystem', {
          pessoa:[
            {
              nome: valuesPerson.nome,
              cpf: valuesPerson.cpf,
              email: valuesPerson.email,
              telefone: valuesPerson.telefone
            }
          ],
          livro:[
            {
              titulo: valuesBook.titulo,
              autor: valuesBook.autor,
              editora: valuesBook.editora,
              anoPublicacao: valuesBook.anoPublicacao,
              dataEmprestimo: valuesBook.dataEmprestimo
            }
          ]
        })
        setValuesPerson({
          nome: '',
          cpf: '',
          email: '',
          telefone: ''
        })
        setValuesBook({
          titulo: '',
          autor: '',
          editora: '',
          anoPublicacao: '',
          dataEmprestimo: ''
        })
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <Container>
      <TitleSlogan>Leve para casa o livro que mais combina com você!</TitleSlogan>
      <ContainerGeneralForm onSubmit={handleSubmit}>
        <ContainerData1>
          <TitleForm>Seus dados</TitleForm>
          <LabelInput>
            <SpanLabel>Nome</SpanLabel>
            <Input
              name='nome'
              value={valuesPerson.nome}
              placeholder="Seu nome"
              onChange={handleChangePerson} 
            />
          </LabelInput>
          <LabelInput>
            <SpanLabel>CPF</SpanLabel>
            <Input 
              name="cpf"
              value={valuesPerson.cpf}
              placeholder="999.999.999-99" 
              onChange={handleChangePerson}
            />
          </LabelInput>
          <LabelInput>
            <SpanLabel>Email</SpanLabel>
            <Input 
              name="email"
              placeholder="Ex: email@example.com" 
              onChange={handleChangePerson}
            />
          </LabelInput>
          <LabelInput>
            <SpanLabel>Telefone</SpanLabel>
            <Input 
              name="telefone"
              value={valuesPerson.telefone}
              placeholder="(99) 99999-9999" 
              onChange={handleChangePerson}
            />
          </LabelInput>
        </ContainerData1>
        <ContainerData1>
        <TitleForm>Dados do livro</TitleForm>
          <LabelInput>
            <SpanLabel>Título</SpanLabel>
            <Input 
              name="titulo"
              value={valuesBook.titulo}
              placeholder="Ex: Ultra-Aprendizado" 
              onChange={handleChangeBook}
            />
          </LabelInput>
          <LabelInput>
            <SpanLabel>Autor</SpanLabel>
            <Input 
              name="autor"
              value={valuesBook.autor}
              placeholder="Ex: Scott H. Young" 
              onChange={handleChangeBook}
            />
          </LabelInput>
          <LabelInput>
            <SpanLabel>Editora</SpanLabel>
            <Input 
              name="editora"
              value={valuesBook.editora}
              placeholder="Ex: Harper Business" 
              onChange={handleChangeBook}
            />
          </LabelInput>
          <LabelInput>
            <SpanLabel>Ano de publicação</SpanLabel>
            <Input 
              name="anoPublicacao"
              value={valuesBook.anoPublicacao}
              placeholder="Ex: 2004" 
              onChange={handleChangeBook}
            />
          </LabelInput>
        </ContainerData1>
        <ContainerData2>
          <TitleFormData>Dados do Empréstimo</TitleFormData>
          <LabelInput>
            <SpanLabel>Data</SpanLabel>
            <InputData 
              name='dataEmprestimo'
              value={valuesBook.dataEmprestimo}
              placeholder="Ex: 21/05/2021" 
              onChange={handleChangeBook}
            />
          </LabelInput>
        </ContainerData2>
        <BtnSubmit type="submit">Enviar</BtnSubmit>
      </ContainerGeneralForm>
    </Container>
  )
}

export default Form