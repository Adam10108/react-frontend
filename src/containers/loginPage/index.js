import React from 'react'
import styled from '@emotion/styled'

import FormLogin from './components/formLogin/index'

import bg from '../../core/images/bg.jpg'

const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImgLayout = styled.img`
  height: 100vh;
  width: 100vw;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LoginPage = () => {
  return (
    <StyledLayout>
      <StyledImgLayout src={bg} />
      <FormLogin />
    </StyledLayout>
  )
}

export default LoginPage
