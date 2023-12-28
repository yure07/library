import styled from "styled-components";
import { InputMask } from 'primereact/inputmask';
        
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`

const TitleSlogan = styled.h1`
  width: 180px;
  text-align: center;
  margin: 16px auto;
  font-family: 'Fraunces';
  font-size: 24px;
`

const ContainerGeneralForm = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
`

const ContainerData1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  height: 70%;
`

const ContainerData2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  margin-top: -12px;
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

const Input = styled(InputMask)`
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

const Form:React.FC = () => {
  return(
    <Container>
      <TitleSlogan>Leve para casa o livro que mais combina com você!</TitleSlogan>
      <ContainerGeneralForm>
        <ContainerData1>
          <TitleForm>Seus dados</TitleForm>
          <LabelInput>
            <SpanLabel>Nome</SpanLabel>
            <Input/>
          </LabelInput>
          <LabelInput>
            <SpanLabel>CPF</SpanLabel>
            <Input mask="999.999.999-99" placeholder="999.999.999-99"/>
          </LabelInput>
          <LabelInput>
            <SpanLabel>Email</SpanLabel>
            <Input placeholder="Ex: email@example.com"/>
          </LabelInput>
          <LabelInput>
            <SpanLabel>Telefone</SpanLabel>
            <Input mask="(99) 99999-9999" placeholder="(99) 99999-9999"/>
          </LabelInput>
        </ContainerData1>
        <ContainerData1>
        <TitleForm>Dados do livro</TitleForm>
          <LabelInput>
            <SpanLabel>Título</SpanLabel>
            <Input placeholder="Ex: Ultra-Aprendizado"/>
          </LabelInput>
          <LabelInput>
            <SpanLabel>Autor</SpanLabel>
            <Input placeholder="Ex: Scott H. Young"/>
          </LabelInput>
          <LabelInput>
            <SpanLabel>Editora</SpanLabel>
            <Input placeholder="Ex: Harper Business"/>
          </LabelInput>
          <LabelInput>
            <SpanLabel>Ano de publicação</SpanLabel>
            <Input mask="9999" placeholder="Ex: 2004"/>
          </LabelInput>
        </ContainerData1>
        <ContainerData2>
          <TitleFormData>Dados do Empréstimo</TitleFormData>
          <LabelInput>
            <SpanLabel>Data</SpanLabel>
            <InputData mask="99/99/9999" placeholder="Ex: 21/05/2004"/>
          </LabelInput>
        </ContainerData2>
        <BtnSubmit>Enviar</BtnSubmit>
      </ContainerGeneralForm>
    </Container>
  )
}
export default Form

// pessoa: nome, cpf, email, telefone
// livro: titulo, autor, editora, ano de publicacao
// emprestimo: data e hora podendo ser string em forma de data (da para usar o InputMask)