import { Row } from 'antd'
import React, { useState } from 'react'
import styled from '@emotion/styled'

import { getTodo } from '../../core/models/todoList'
import { useGetTodo } from '../../core/hooks'
import FormAddTodo from './components/formAddTodo'
import HeaderBar from './components/headerBar'
import MainLayout from '../../components/Layout'
import Modal from '../../components/modal'

const StyledContentLayout = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  padding: 20px;
  margin: 30px;
`

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: white !important;
  }
`
const HomePage = () => {
  // useGetTodo
  const resp = useGetTodo(getTodo)
  const { data, setIsLoading, reloadData, setStatus } = resp
  // Modal
  const [modalAddOpen, setModalAddOpen] = useState(false)
  const [modalEditOpen, setModalEditOpen] = useState(false)

  const handleOpenModal = type => {
    if (type === 'editTodo') {
      setModalEditOpen(true)
    } else {
      setModalAddOpen(true)
    }
  }

  const handleCloseModal = type => {
    if (type === 'editTodo') {
      setModalEditOpen(false)
    } else {
      setModalAddOpen(false)
    }
  }

  return (
    <MainLayout>
      <StyledContentLayout>
        <Row>
          <HeaderBar modalOpen={handleOpenModal} />
        </Row>

        <StyledModal
          destroyOnClose
          closable={false}
          visible={modalAddOpen}
          handleCancel={() => handleCloseModal('addTodo')}
        >
          <FormAddTodo
            setModalAddOpen={setModalAddOpen}
            setIsLoading={setIsLoading}
            reloadData={reloadData}
            setStatus={setStatus}
          />
        </StyledModal>
      </StyledContentLayout>
    </MainLayout>
  )
}

export default HomePage
