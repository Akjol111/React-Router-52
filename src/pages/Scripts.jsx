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
      <h1 onClick={() => navigate("/3")} >JS</h1>
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
    margin-top: -700px;
    >h1{
        font-size:60px;
    }
    
`
const Doniv = styled.div`
        border: 2px solid black;
        width: 80%;
            background-color: black;
        color: white;
        border-radius: 50px;
        margin-top: 70px;
        margin-left: 20px;
`
const Dad = styled.div`
    border: 2px solid;
    width: 15%;
    height: 900px;
    margin-top: 30px;
    >button{
        padding: 10px;
        border-radius: 20px;
        font-size: 25px;
        font-weight: bold;
        margin-top: 40px;
    }
    >hr{
        border: 1px solid;
        margin-top: 55px;
    }
`
const Header = styled.div`
    border: 2px solid;
    width: 70%;
    height: 140px;
    position: absolute;
    margin-left: 315px;
    margin-top: -340px;
    display: flex;
    align-items: center;
    justify-content: space-around;

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