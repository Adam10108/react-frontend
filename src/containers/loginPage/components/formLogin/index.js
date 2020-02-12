import { Form, Input, Button, notification } from 'antd'
import { Redirect } from 'react-router-dom'
import * as R from 'ramda'
import React, { useState } from 'react'
import styled from '@emotion/styled'

import { login } from '../../../../core/models/auth'
import { setToken } from '../../../../core/localStores'

const StyledFormLoginLayout = styled.div`
  height: 350px;
  width: 400px;

  position: absolute;
  padding: 10px 20px;
  background-color: white;
  border-radius: 20px;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  border-radius: 20px;
  margin: 0px 0px 20px 0px;
`

const StyledText = styled.span`
  font-size: ${props => (props.header ? '40px' : '16px')};
  color: ${props => (props.header ? 'white' : 'black')};
  font-weight: 800;
`
const StyledFromItem = styled(Form.Item)`
  margin-bottom: 10px;
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

const StyledBtnCheck = styled(Button)`
  color: white;
  background-color: #5ffb92;
  border-color: white;
  width: 100px;
  height: 36px;
  margin-top: 12px;
  font-weight: 800;
  border-radius: 10px;
  &:hover {
    color: white;
    border-color: white;
    background: #4fd57b;
  }
  &:focus {
    color: white;
    border-color: white;
    background: #4fd57b;
  }
`

notification.config({
  placement: 'topRight',
  top: 80,
  duration: 2
})

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description
  })
}

const FormLogin = props => {
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values
        const data = {
          username,
          password
        }

        try {
          const resp = await login(data)
          const { token } = R.path(['data'], resp)
          setLoginSuccess(true)
          setToken('token', token)
        } catch (error) {
          openNotificationWithIcon(
            'warning',
            'Login Failed!!!.',
            'Enter Username or Password again.'
          )
        }
      }
    })
  }

  const { getFieldDecorator } = props.form
  return (
    <StyledFormLoginLayout>
      {loginSuccess && <Redirect to="/home" />}
      <StyledHeader>
        <StyledText header>Login</StyledText>
      </StyledHeader>

      <Form>
        <StyledText>Username</StyledText>
        <StyledFromItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your Username!' }]
          })(
            <Input
              placeholder="Enter Username"
              autoFocus
              onPressEnter={e => handleSubmit(e)}
            />
          )}
        </StyledFromItem>

        <StyledText>Password</StyledText>
        <StyledFromItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              type="password"
              placeholder="Enter Password"
              autoFocus
              onPressEnter={e => handleSubmit(e)}
            />
          )}
        </StyledFromItem>

        <StyledFooter>
          <StyledBtnCheck name="Login" onClick={e => handleSubmit(e)}>
            Submit
          </StyledBtnCheck>
        </StyledFooter>
      </Form>
    </StyledFormLoginLayout>
  )
}

const WrappedLoginForm = Form.create()(FormLogin)
export default WrappedLoginForm
