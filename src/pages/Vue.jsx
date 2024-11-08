import React from 'react'
import styled from 'styled-components'

const Vue = () => {
  return (
    <Vuel>
      <h1>Vue.js</h1><h2> — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.</h2>
    </Vuel>
  )
}

export default Vue

const Vuel = styled.div`
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