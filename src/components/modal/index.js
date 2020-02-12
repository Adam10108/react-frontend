// @flow
import React from 'react'
import { Modal as AntdModal } from 'antd'

type Props = {
  className: string,
  closable: boolean,
  destroyOnClose: boolean,
  titleModal: string,
  visible: boolean,
  handleCancel: () => void
}

const Modal = (props: Props) => {
  const {
    className,
    closable,
    destroyOnClose,
    visible,
    titleModal,
    handleCancel,
    children
  } = props

  return (
    <AntdModal
      className={className}
      closable={closable}
      destroyOnClose={destroyOnClose}
      title={titleModal}
      visible={visible}
      footer={null}
      onCancel={handleCancel}
    >
      {children}
    </AntdModal>
  )
}

export default Modal
