// @flow
import { Row, Button, Modal } from 'antd'
import * as R from 'ramda'
import moment from 'moment'
import React from 'react'
import styled from '@emotion/styled'

import { deleteTodo } from '../../../core/models/todoList'

const StyledButton = styled(Button)`
  font-size: 15px;
  font-weight: bold;
  color: white;

  width: 60px;
  height: 30px;
  border-radius: 2px;
  background-color: ${props => (props.edit ? '#E9DF2E' : 'red')};
  border-color: white;
  padding: 5px;
  font-weight: 800;

  &:hover {
    color: white;
    border-color: white;
    background: ${props => (props.edit ? '#E9DF2E' : '#EB1278')};
  }
  &:focus {
    color: white;
    border-color: white;
    background: ${props => (props.edit ? '#E9DF2E' : '#EB1278')};
  }
`

const StyledText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.active ? '#5ffb92 ' : '#EB1278')};
`
const StyledTextTable = styled(StyledText)`
  opacity: 0.7;
  color: white;
`

const columnConfig = (handleOpenModal, setIsLoading, reloadData) => {
  const { confirm } = Modal

  const handleDeleteTodo = async row => {
    confirm({
      title: 'Delete TODO',
      content: 'Are you sure delete this TODO!!',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        setIsLoading(true)
        await deleteTodo(row)
        reloadData()
        setIsLoading(false)
      },
      onCancel() {}
    })
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'Title',
      render: title => {
        return <StyledTextTable>{title}</StyledTextTable>
      }
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: description => {
        return <StyledTextTable>{description}</StyledTextTable>
      }
    },
    {
      title: 'Time Create',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: createdAt => {
        return (
          <StyledTextTable>
            {moment(createdAt).format('MMM Do YYYY - h:mm a')}
          </StyledTextTable>
        )
      }
    },
    {
      title: '',
      render: row => {
        return (
          <Row type="flex" justify="start">
            <StyledButton edit onClick={() => handleOpenModal('editTodo', row)}>
              Edit
            </StyledButton>
          </Row>
        )
      }
    },
    {
      title: '',
      render: row => {
        return (
          <Row type="flex" justify="start">
            <StyledButton
              onClick={() => handleDeleteTodo(R.path(['_id'], row))}
            >
              Delete
            </StyledButton>
          </Row>
        )
      }
    }
  ]
  return columns
}

export default columnConfig
