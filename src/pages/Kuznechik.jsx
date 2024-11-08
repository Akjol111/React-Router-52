import React from 'react'
import styled from 'styled-components'


const Kuznechik = () => {
  return (
    <Div>
      <h1>React.js</h1><h2> — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.</h2>
    </Div>
  )
}

export default Kuznechik;

const Div  = styled.div`
    width: 600px;
    height: 400px;
    background-color: black;
    color: white;
    border-radius: 50px;
    position: absolute;
    margin-left: 650px;
    margin-top: -500px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`