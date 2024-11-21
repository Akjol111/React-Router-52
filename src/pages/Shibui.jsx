import React from 'react'
import styled from 'styled-components'

const Shibui = () => {
  return (
    <Dev>
      <h1>JavaScript</h1><h2>— это высокоуровневый язык программирования, используемый для создания интерактивных веб-страниц. Он работает на стороне клиента (в браузере) и позволяет добавлять на сайт динамические элементы, такие как анимации, формы, обновление контента без перезагрузки страницы (через AJAX).</h2>
    </Dev>
  )
}

export default Shibui


const Dev  = styled.div`
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