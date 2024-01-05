import React, { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask'
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
  flex-direction: column;
  justify-content: space-between;
  width: 1100px;
  height: 150px;
  margin: 48px 0;
`

const TitleMain = styled.h1`
  text-align: center;
  font-size: 40px;
  letter-spacing: .1rem;
  font-family: 'Montserrat';
`

const ContainerSearches = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: -24px;
  column-gap: 25px;
`

const SelectSearch = styled.select`
  width: 180px;
  padding: 8px;
  font-family: 'Montserrat';
`

const SearchByCpfInput = styled.input`
  width: 200px;
  height: 35px;
  padding: 0 8px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  font-family: 'Montserrat';
  font-weight: 700;
`

const SearchByDateInput = styled(InputMask)`
  width: 200px;
  height: 35px;
  padding: 0 8px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  font-family: 'Montserrat';
  font-weight: 700;
`
const BtnSubmitDate = styled.button`
  background-color: #008cff;
  padding: 8px;
  font-family: 'Montserrat';
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
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
  const [valueOption, setValueOption] = useState<string>('')
  
  const showAllBooks = searchCpf === '' && searchDateLoan === '' ? <AllBooks/> : null
  const showBooksByCpf = searchCpf !== '' && <SearchByCpf value={searchCpf}/>
  const showBooksByDateLoan = searchDateLoan !== '' && <SearchByDate date={searchDateLoan}/>
  
  let dateLoanCurrent:string = ''
  return(
    <Container>
      <ContainerHeader>
        <TitleMain>Empréstimos</TitleMain>
        <ContainerSearches>
          <SelectSearch
            name="filters" 
            value={valueOption} 
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setValueOption(e.target.value)}>
            <option value='' disabled hidden>Buscar por...</option>
            <option></option>
            <option value='CPF'>CPF</option>
            <option value='data-de-emprestimo'>Data de empréstimo</option>
            
          </SelectSearch>
          {valueOption === 'CPF' && <SearchByCpfInput
            placeholder="Ex: 999.999.999-99" 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchCpf(e.target.value)}/>
          }
          {valueOption === 'data-de-emprestimo' && (
            <>
              <SearchByDateInput
                placeholder="Ex: 10/09/2017"
                mask="99/99/9999"
                onChange={(e: InputMaskChangeEvent) => dateLoanCurrent = e.target.value as string}/>
              <BtnSubmitDate onClick={(e: MouseEvent<HTMLButtonElement>) => setSearchDateLoan(dateLoanCurrent)}>Buscar</BtnSubmitDate>
            </>
            )
          }
          
        </ContainerSearches>
      </ContainerHeader>
      <ContainerList>
        {showAllBooks}
        {showBooksByCpf}
        {showBooksByDateLoan}
      </ContainerList>
    </Container>
  )
}

export default Books