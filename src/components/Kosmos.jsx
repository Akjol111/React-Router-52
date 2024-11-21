import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Kosmos = () => {
  return (
    <>
    <Ded>
    <Header>
      <Disibl>
      <Link to="/" ><h1>IT-LOGO</h1></Link> 
      </Disibl>
      <Disible>
      <Link to="input" > <h1>Registr</h1></Link>
      </Disible>
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
border: 1px solid white;
    width: 85%;
    height: 165px;
    border-radius: 90px;
    margin: auto;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; 
    background-image:url("https://www.cnet.com/a/img/resize/90bc98c7d6017cab30ad4f104235a0adb9c80364/hub/2022/01/14/a9f69e23-6e03-437a-95a2-3493834fa12b/gettyimages-1158013906.jpg?auto=webp&fit=crop&height=675&width=1200"); 
    background-size: cover;
    background-position: center;
`
const Ded = styled.div`
border: 1px solid black;
  width: 100%;
  height: 970px;
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-space-hd-wallpapers-4-k-image_2682589.jpg");
  background-size: cover;
  background-position: center;
`
const Disibl = styled.div`
  width: 140px;
  height: 80px;
  background-color: #989898;
  border-radius: 30px;
  
`
const Disible = styled.div`
  width: 140px;
  height: 80px;
  background-color: #989898;
  border-radius: 30px;
  
`