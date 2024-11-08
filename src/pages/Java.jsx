import React from 'react'
import styled from 'styled-components'

const Java = () => {
  return (
    <Div>
      <h1>Java —</h1><h2>это объектно-ориентированный язык программирования, который используется для разработки разнообразных приложений: от мобильных до корпоративных.</h2>
    </Div>
  )
}

export default Java

const Div = styled.div`
    width: 600px;
    height: 300px;
    border-radius: 30px;
    background-color: black;
    color: white;
    margin: auto;
    margin-top: 120px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`