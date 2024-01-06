import React, { ChangeEvent, useState } from "react"
import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask'
import styled from "styled-components"
import AllBooks from "../../components/AllBooks"
import SearchByCpf from "../../components/SearchByCpf"
import SearchByDate from "../../components/SearchByDateLoan"
import SearchByYearLaunch from "../../components/SearchByYearLaunch"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #f0fff0;
  font-family: 'Montserrat';
`

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 992px;
  height: 150px;
  margin: 48px 0;
  margin-bottom: 0;

  @media (max-width: 992px){
    width: 90%;
    height: 200px;
  }
`

const TitleMain = styled.h1`
  text-align: center;
  font-size: 40px;
  letter-spacing: .1rem;
`

const ContainerSearches = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 25px;

  @media (max-width: 600px){
    flex-direction: column;
    row-gap: 16px;
  }
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

const ContainerSeacrhByYear = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;

  @media (max-width: 600px){
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
  }
`

const SearchByYearInput = styled(SearchByDateInput)`
  @media (max-width: 600px){
    width: 130px;
  }
`

const TextSearchByYear = styled.p`
  font-weight: 700;
`

const BtnSubmitYear = styled(BtnSubmitDate)`
  @media (max-width: 600px){
    width: 100%;
  }
`

const ContainerList = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 992px;
  margin: 20px 0;

  @media (max-width: 992px){
    width: 90%;
    justify-content: space-evenly;
  }
`

const Books:React.FC = () => {
  const [searchCpf, setSearchCpf] = useState<string>('')
  const [searchDateLoan, setSearchDateLoan] = useState<string>('')
  const [years, setYears] = useState<number[]>([])
  const [valueOption, setValueOption] = useState<string>('')
  
  const showAllBooks = searchCpf === '' && searchDateLoan === '' && years.length === 0 ? <AllBooks/> : null
  const showBooksByCpf = searchCpf !== '' && <SearchByCpf value={searchCpf}/>
  const showBooksByDateLoan = searchDateLoan !== '' && <SearchByDate date={searchDateLoan}/>
  const showBooksByYear = years.length !== 0 && <SearchByYearLaunch years={years}/>
  
  let dateLoanCurrent:string = ''

  let year1SearchByYear:string = ''
  let year2SearchByYear:string = ''
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
            <option value='CPF'>CPF</option>
            <option value='data-de-emprestimo'>Data de empréstimo</option>
            <option value='entre-anos-de-publi'>Anos de publicação</option>
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
              <BtnSubmitDate onClick={() => setSearchDateLoan(dateLoanCurrent)}>Buscar</BtnSubmitDate>
            </>
            )
          }
          {valueOption === 'entre-anos-de-publi' && (
            <ContainerSeacrhByYear>
              <SearchByYearInput 
                placeholder="Ex: 2020"
                mask="9999"
                onChange={(e: InputMaskChangeEvent) => year1SearchByYear = e.target.value as string}
              />
              <TextSearchByYear>Até</TextSearchByYear>
              <SearchByYearInput 
                placeholder="Ex: 2022"
                mask="9999"
                onChange={(e: InputMaskChangeEvent) => year2SearchByYear = e.target.value as string}
              />
              <BtnSubmitYear 
                onClick={() => setYears([parseInt(year1SearchByYear), parseInt(year2SearchByYear)])}
              >
                Buscar
              </BtnSubmitYear>
            </ContainerSeacrhByYear>
          )}
        </ContainerSearches>
      </ContainerHeader>
      <ContainerList>
        {showAllBooks}
        {showBooksByCpf}
        {showBooksByDateLoan}
        {showBooksByYear}
      </ContainerList>
    </Container>
  )
}

export default Books