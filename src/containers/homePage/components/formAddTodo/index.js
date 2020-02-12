// @flow
import { Form, Input, Button } from 'antd'
import * as R from 'ramda'
import React, { useState } from 'react'
import styled from '@emotion/styled'

import { addTodo } from '../../../../core/models/todoList/index'

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
  background-color: ${props => (props.submit ? 'green' : 'red')};
  border-color: white;
  width: 100px;
  height: 36px;
  margin-top: 12px;
  font-weight: 800;
  border-radius: 10px;
  &:hover {
    color: white;
    border-color: white;
    background: ${props => (props.submit ? '#5ffb92 ' : '#EB1278')};
  }
  &:focus {
    color: white;
    border-color: white;
    background: ${props => (props.submit ? '#5ffb92 ' : '#EB1278')};
  }
`
type Props = {
  setModalAddOpen: Function,
  setIsLoading: Function,
  reloadData: Function,
  setStatus: Function
}

const FormAddUser = (props: Props) => {
  const { setModalAddOpen, setIsLoading, reloadData, setStatus } = props

  const handleCancel = () => {
    setModalAddOpen(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        const todoData = {
          ...values
        }
        try {
          setIsLoading(true)
          await addTodo(todoData)
          reloadData()
          setModalAddOpen(false)
          setIsLoading(false)
        } catch (error) {
          setStatus(R.path(['response', 'status'], error))
        }
      }
    })
  }

  const { getFieldDecorator } = props.form

  return (
    <>
      <StyledHeader>
        <StyledText header>Create TODO</StyledText>
      </StyledHeader>

      <Form>
        <StyledText>Title</StyledText>
        <StyledFromItem>
          {getFieldDecorator('title', {
            rules: [
              { required: true, message: 'Please input your title todo!' }
            ]
          })(
            <Input
              placeholder="Enter Title"
              autoFocus
              onPressEnter={e => handleSubmit(e)}
            />
          )}
        </StyledFromItem>

        <StyledText>Description</StyledText>
        <StyledFromItem>
          {getFieldDecorator('description', {
            rules: [
              { required: true, message: 'Please input your description todo!' }
            ]
          })(
            <Input
              placeholder="Enter Description"
              autoFocus
              onPressEnter={e => handleSubmit(e)}
            />
          )}
        </StyledFromItem>

        <StyledFooter>
          <StyledBtnCheck onClick={e => handleCancel(e)}>Cancel</StyledBtnCheck>
          <StyledBtnCheck submit onClick={e => handleSubmit(e)}>
            Submit
          </StyledBtnCheck>
        </StyledFooter>
      </Form>
    </>
  )
}

const WrappedAddUserForm = Form.create()(FormAddUser)
export default WrappedAddUserForm
