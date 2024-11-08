import React from 'react'
import styled from 'styled-components'

const InfoHTML = () => {
  return (
    <Div>
      <h1> HTML (HyperText Markup Language)</h1> <h2>— это язык разметки для создания и структурирования веб-страниц.</h2>
    </Div>
  )
}

export default InfoHTML

const  Div = styled.div`
  width: 600px;
  height: 200px;
  background-color: black;
  color: white;
  border-radius: 30px;
  font-weight: bold;
  margin: auto;
  margin-top: 100px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`