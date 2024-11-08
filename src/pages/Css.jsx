import React from 'react'
import styled from 'styled-components'

const Css = () => {
  return (
    <Div>
    <h1>CSS (Cascading Style Sheets)</h1>  <h2>— это язык стилей, который используется для оформления и визуального представления HTML-страниц.</h2>
    </Div>
  )
}

export default Css

const Div = styled.div`
    width: 600px;
    height: 250px;
    border-radius: 30px;
    background-color: black;
    color: white;
    font-weight: bold;
    margin: auto;
    margin-top: 100px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`