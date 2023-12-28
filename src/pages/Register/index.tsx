import styled from "styled-components"
import imgLibrary from '../../assets/images/casal-aproveitando.jpg'
import Form from "../../components/Form"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  background-color: #f0fff0;
`

const Title = styled.h1`
  font-size: 40px;
  letter-spacing: .1rem;
  font-family: 'Montserrat';
`

const ContainerBoard = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
  padding: 0 24px;
  height: 550px;
  background: linear-gradient(to bottom left, #ffdb58, #dbbe57);
  box-shadow: 5px 5px 10px #000;
`

const ImgCouple = styled.img`
  width: 350px;
  height: 100%;
`

const Register:React.FC = () => {
  return(
    <Container>
      <Title>Sistema Bibliotecário</Title>
      <ContainerBoard>
        <ImgCouple src={imgLibrary} alt="couple-library"/>
        <Form/>
      </ContainerBoard>
    </Container>
  )
}
export default Register