// @flow
import { Table as AntTable } from 'antd'
import * as R from 'ramda'
import React from 'react'
import styled from '@emotion/styled'

const StyledScroll = styled.div`
  height: ${props => (props.height ? props.height : '')};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: green;
  }
`

type Props = {
  columns: any,
  dataSource: any,
  loading: boolean,
  setIsLoading: Function,
  rowKey: any,
  defaultPage: number,
  onChangePage: Function,
  children: any,
  scroll: string
}

const Table = (props: Props) => {
  const {
    columns,
    loading,
    setIsLoading,
    dataSource,
    rowKey,
    defaultPage,
    children,
    center,
    scroll,
    ...rest
  } = props

  return (
    <>
      <StyledScroll
        height={R.path(['y'], scroll)}
        width={R.path(['x'], scroll)}
      >
        <AntTable
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={rowKey}
          pagination={false}
          {...rest}
        />
      </StyledScroll>
    </>
  )
}

export default Table
