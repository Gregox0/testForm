import styled from 'styled-components'
import BarsIcon from '../assets/imgs/bars.svg'
const ContainerStyled = styled.div`
  padding: 8px;

  width: 250px;
  height: 30px;

  display: flex;
  align-items: center;

  background-color: #e8ebf7;
  border-radius: 3px;
  border: 2px solid ${(props) => (props.error ? 'red' : '#e8ebf7')}; 
  transition: border 0.3s ease-in-out;
`

const InputStyled = styled.input`
  padding-left: 5px;

  width: 230px;

  background-color: transparent;
  border: 0;
  outline: 0;
`
const ImgStyled = styled.img`
  height: 15px;
  width: 15px;
`
export default function Input({ value, onChange, onKeyDown, error }) {
  return (
    <ContainerStyled error={error}>
      <ImgStyled src = {BarsIcon}/>
      <InputStyled
        type='text'
        placeholder='Nome'
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
      />
    </ContainerStyled>
  )
}
