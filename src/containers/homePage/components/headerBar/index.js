// @flow
import { Button } from 'antd'
import React from 'react'
import styled from '@emotion/styled'

const StyledLayout = styled.div`
  height: 50px;
  margin: 0px 0px 20px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledBtnCheck = styled(Button)`
  color: white;
  background-color: #d16ba5;
  border-color: white;
  width: 100px;
  height: 36px;

  font-weight: 800;
  border-radius: 10px;
  &:hover {
    color: white;
    border-color: white;
    background: #86a8e7;
  }
  &:focus {
    color: white;
    border-color: white;
    background: #5ffbf1;
  }
`

type Props = {
  modalOpen: Function
}
const HeaderBar = (props: Props) => {
  const { modalOpen: handleModalOpen } = props
  return (
    <StyledLayout>
      <StyledBtnCheck name="addTodo" onClick={() => handleModalOpen('addTodo')}>
        Add TODO
      </StyledBtnCheck>
    </StyledLayout>
  )
}

export default HeaderBar
