import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Kosmos = () => {
  return (
    <>
    <Ded>
    <Header>
      <Link to="/" ><h1>IT-LOGO</h1></Link> 
      <Link to="input" > <h1>Registr</h1></Link>
    </Header>
    <div>
        <Outlet/>
    </div>
    </Ded>
    </>

  )
}

export default Kosmos

const Header = styled.div`
    width: 85%;
    height: 165px;
    border-radius: 90px;
    margin: auto;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background: linear-gradient(181.31deg, #CAC1C1 -9.48%, rgba(143, 140, 140, 0) 100.9%);
  
`
const Ded = styled.div`
border: 1px solid black;
  width: 100%;
  height: 970px;
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-space-hd-wallpapers-4-k-image_2682589.jpg");
  background-size: cover;
  background-position: center;
`