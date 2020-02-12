// @flow
import { Layout, Dropdown, Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import React from 'react'
import styled from '@emotion/styled'

import { clearToken } from '../../core/localStores'
import Header from '../header'

const StyledBackgruond = styled(Layout)`
  height: 100vh;
`

const StyledText = styled.span`
  font-size: ${props => (props.header ? '40px' : '20px')};
  color: white;
  font-weight: 800;
  text-transform: ${props => (props.header ? '' : 'capitalize')};
`

const MenuStyled = styled(Menu)`
  width: 150px;
  background-color: red;
  border-radius: 10px;
`
const IconStyled = styled(Icon)`
  color: white;
  font-size: ${props => (props.user ? '30px' : '20px')};
  font-weight: 800;
  margin: 0 10px 0 0;
`

type Props = {
  children: any
}

const BaseLayout = (props: Props) => {
  const menu = (
    <MenuStyled>
      <Menu.Item>
        <Link to="/" onClick={() => clearToken()}>
          <StyledText>
            <IconStyled type="logout" />
            Log out
          </StyledText>
        </Link>
      </Menu.Item>
    </MenuStyled>
  )

  const { children } = props
  return (
    <StyledBackgruond>
      <Header>
        <StyledText header>TODO - List</StyledText>
        <Dropdown overlay={menu} placement="bottomCenter">
          <div>
            <IconStyled user type="user" />
            <StyledText>Usaername</StyledText>
          </div>
        </Dropdown>
      </Header>
      {children}
    </StyledBackgruond>
  )
}

export default withRouter(BaseLayout)
