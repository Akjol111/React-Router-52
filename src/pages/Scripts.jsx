import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Scripts = () => {

    let navigate =  useNavigate()

    const  goBack = () => navigate(-1)
  return (
    <>
    <Vid>
    <Dad>
    <button onClick={goBack} >GO BACK</button>
    <hr />
    <Doniv>
            <h1>GO BACK</h1><h2> - Вернёт вас  на один страницу назад</h2>
    </Doniv>
    </Dad>
    <Div>
      <Link to="js" ><H1>JS</H1></Link> 
    </Div>
    <Header>
        <Link to="react" > <Button><strong>React.Js</strong></Button></Link>
         <Link to="vue" > <Buttton><strong>Vue.Js</strong></Buttton> </Link>
    </Header>
    </Vid>
    <div>
        <Outlet/>
    </div>
    </>
  )
}

export default Scripts

const Vid = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: underline;
`

const Div =  styled.div`
    border: 2px solid;
    width: 77%;
    height: 150px;
    border-radius: 20px;
    margin-top: -700px;
    background-image: url("https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwdW5pdmVyc2V8ZW58MHx8MHx8fDA%3D");
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const H1 = styled.h1`
        width: 140px;
        height: 60px;
        background-color: #ffffff;
        border-radius: 30px;
        margin: auto;
        margin-top: 35px;
`
const Doniv = styled.div`
        border: 2px solid white;
        width: 80%;
        background-color: black;
        color: white;
        border-radius: 50px;
        margin-top: 70px;
        margin-left: 20px;
`
const Dad = styled.div`
    
    width: 15%;
    height: 900px;
    border-radius: 30px;
    margin-top: 30px;
    background-image: url("https://scx2.b-cdn.net/gfx/news/2024/event-horizon-of-a-bla.jpg");
    background-size: cover;
    background-position: center;
    >button{
        padding: 10px;
        border-radius: 20px;
        font-size: 25px;
        font-weight: bold;
        margin-top: 40px;
    }
    >hr{
        border: 1px solid  white;
        margin-top: 55px;
    }
`
const Header = styled.div`
    border: 2px solid;
    width: 70%;
    height: 140px;
    border-radius: 20px;
    position: absolute;
    margin-left: 315px;
    margin-top: -340px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url("https://w.wallhaven.cc/full/ex/wallhaven-exy3ml.png");
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 20px;
    font-size: 25px;
    font-weight: bold;
`
const Buttton = styled.button`
    padding: 10px;
    border-radius: 20px;
    font-size: 25px;
    font-weight: bold;
`