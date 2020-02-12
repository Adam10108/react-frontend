import { Row } from 'antd'
import React, { useState } from 'react'
import styled from '@emotion/styled'

import { getTodo } from '../../core/models/todoList'
import { useGetTodo } from '../../core/hooks'
import FormAddTodo from './components/formAddTodo'
import FormEditTodo from './components/formEditTodo'
import HeaderBar from './components/headerBar'
import MainLayout from '../../components/layout'
import Modal from '../../components/modal'
import Table from '../../components/table'

import columnConfig from './components/columns.todoList'

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
const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    font-size: 20px;
    color: white;
    font-weight: 800;
    text-align: center;
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
  }
  .ant-table-placeholder {
    color: rgba(0, 0, 0, 0.25);
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
    border-bottom: none;
  }
`
const HomePage = () => {
  // useGetTodo
  const resp = useGetTodo(getTodo)
  const { data, isLoading, setIsLoading, reloadData, setStatus } = resp
  // Modal
  const [modalAddOpen, setModalAddOpen] = useState(false)
  const [modalEditOpen, setModalEditOpen] = useState(false)

  const [selectedRow, setSelectedRow] = useState({})

  const handleOpenModal = (type, row) => {
    if (type === 'editTodo') {
      setModalEditOpen(true)
      setSelectedRow(row)
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

        <StyledModal
          destroyOnClose
          closable={false}
          visible={modalEditOpen}
          handleCancel={() => handleCloseModal('editTodo')}
        >
          <FormEditTodo
            selectedRow={selectedRow}
            setModalEditOpen={setModalEditOpen}
            setIsLoading={setIsLoading}
            reloadData={reloadData}
            setStatus={setStatus}
          />
        </StyledModal>

        <div>
          <StyledTable
            className="todoListTable"
            columns={columnConfig(handleOpenModal, setIsLoading, reloadData)}
            dataSource={data}
            loading={isLoading}
            rowKey="_id"
            scroll={{ x: false, y: `${window.innerHeight - 400}px` }}
            withIndex
          />
        </div>
      </StyledContentLayout>
    </MainLayout>
  )
}

export default HomePage
