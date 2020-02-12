// @flow
import { Layout } from 'antd'
import React from 'react'
import styled from '@emotion/styled'

const { Header } = Layout

const HeaderStyled = styled(Header)`
  height: 90px;
  width: 100vw;
  padding: 0 30px;

  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type Props = {
  children: any
}

const HeaderBar = (props: Props) => {
  const { children, ...rest } = props
  return <HeaderStyled {...rest}>{children}</HeaderStyled>
}

export default HeaderBar
