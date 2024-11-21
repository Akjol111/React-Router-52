import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Mac = () => {

  const factory = useNavigate()

  return (
    <>
    <Dabl>
    <Home>
        <h1 onClick={() => factory("/")} >Home</h1>
        <hr />
      <Debil>
        <h1>Home</h1><h2> -  отправить тебя на первую страницу главную страницу.</h2>
      </Debil>
    </Home>
    <Div>
      <Disibl>

      <Link to='html' > <h1>HTML</h1></Link>
      </Disibl>
    <Sigma>
      <Link to='css' > <h1>CSS</h1></Link>
      </Sigma>
      <Boi>
          <h1 onClick={() =>  factory("/3")} >JS</h1>
       </Boi>
       <Oleg>
          <Link to='java' > <h1>JAVA</h1></Link>
       </Oleg>
    </Div>
    </Dabl>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default Mac

const Debil = styled.div`
  border: 2px solid;
  width: 80%;
  height:370px;
  background-color: black;
  color: white;
  border-radius: 50px;
  position: absolute;
  margin-top: 260px;
  margin-left: 20px;
  
`


const Dabl = styled.div`
    margin-top: 20px;
    text-decoration: underline;
`

const Home = styled.div`
  border: 2px solid;
  width: 13%;
  height: 900px;
  border-radius: 20px;
  margin-left: 20px;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-image: url("https://marvel-b1-cdn.bc0a.com/f00000000295839/red.msudenver.edu/wp-content/uploads/2023/07/shutterstock_1393200200.jpg");
  background-size: cover;
  background-position: center;
    >h1{
      position: absolute;
      margin-left: 60px;
      margin-top:50px;
      text-decoration: underline;
      color: white;
    }
    >hr{
      border: 1px solid white;
    position: absolute;
    width: 170px;
    margin-top: 140px;
    margin-left: 25px;
    }
`

const Div = styled.div`
  border: 2px solid ;
  width: 80%;
  height: 150px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 270px;
  background-image: url("https://marvel-b1-cdn.bc0a.com/f00000000295839/red.msudenver.edu/wp-content/uploads/2023/07/shutterstock_1393200200.jpg");
  background-size: cover;
  background-position: center;
`
const Disibl = styled.div`
  width: 140px;
  height: 80px;
  background-color: #989898;
  border-radius: 30px;
  
`
const Sigma = styled.div`
  width: 140px;
  height: 80px;
  background-color: #989898;
  border-radius: 30px;
  
`
const Boi = styled.div`
  width: 140px;
  height: 80px;
  background-color: #989898;
  border-radius: 30px;
  
`
const Oleg = styled.div`
  width: 140px;
  height: 80px;
  background-color: #989898;
  border-radius: 30px;
  
`