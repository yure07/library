import { ChangeEvent, useState } from "react"
import styled from "styled-components"
import AllBooks from "../../components/AllBooks"
import SearchByCpf from "../../components/SearchByCpf"
import SearchByDate from "../../components/SearchByDateLoan"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0fff0;
  `

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  height: 50px;
  margin: 48px 0;
  `

const TitleMain = styled.h1`
  width: 63%;
  text-align: end;
  font-size: 40px;
  letter-spacing: .1rem;
  font-family: 'Montserrat';
`
const SearchByCpfInput = styled.input`
  width: 180px;
  height: 35px;
  padding: 0 8px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  font-family: 'Montserrat';
  font-weight: 700;
`

const ContainerList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1100px;
`

const Books:React.FC = () => {
  const [searchCpf, setSearchCpf] = useState<string>('')
  const [searchDateLoan, setSearchDateLoan] = useState<string>('')

  const showAllBooks = searchCpf === '' || searchDateLoan === '' && <AllBooks/>
  const showBooksByCpf = <SearchByCpf value={searchCpf}/>
  const showBooksByDateLoan = <SearchByDate date={searchDateLoan}/>

  return(
    <Container>
      <ContainerHeader>
        <TitleMain>Empréstimos</TitleMain>
        <SearchByCpfInput
          placeholder="Buscar por CPF" 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchCpf(e.target.value)}/>
      </ContainerHeader>
      <ContainerList>
      {showAllBooks}
      {showBooksByCpf}
      </ContainerList>
    </Container>
  )
}

export default Books