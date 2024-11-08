import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <div>
      <Img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" />
    </div>
  )
}

export default Logo

const Img = styled.img`
border-radius: 50px;
  margin-top: 90px;

`