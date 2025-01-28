import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Input from './components/Input'
import List from './components/List'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('./assets/fonts/Poppins-Medium.ttf') format('ttf'),
    font-weight: normal;
    font-style: normal;
  }

  body {
    height: 100vh;
    margin: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #791e94;
    font-family: 'Poppins', sans-serif;
  }
`

function App() {
  const [nome, setNome] = useState('')
  const [nomes, setNomes] = useState([])
  const [error, setError] = useState(false)

  const handleKeyDown = (e) => {
    if(e.key == 'Enter'){
      if(nome.trim() != '' && !nomes.includes(nome.trim())){
        setNomes([...nomes, nome])
        setNome('')
      }else{
        setError(true)
        setTimeout(() => setError(false), 1000)
      }   
    }
  }

  return (
    <>
      <GlobalStyle />
      <Input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onKeyDown={handleKeyDown}
        error={error}
      />
      <List items={nomes} />
    </>
  )
}

export default App
