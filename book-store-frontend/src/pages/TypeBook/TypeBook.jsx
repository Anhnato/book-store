import React from 'react'
import CardBook from '../../components/CardBook/CardBook'
import { WrapperProducts } from '../Home/style'
import { Pagination } from 'antd'

const TypeBook = () => {
    const onChange = () => {}
  return (
    <>
        <div style={{ padding: '50px 120px', background: '#efefef'}}>
            <WrapperProducts>
                <CardBook />
                <CardBook />
                <CardBook />
                <CardBook />
            </WrapperProducts>
        </div>
        <Pagination defaultCurrent={1} total={100} onChange={onChange} style={{ textAlign: 'center'}}/>
    </>
  )
}

export default TypeBook