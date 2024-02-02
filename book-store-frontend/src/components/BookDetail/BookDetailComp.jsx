import { Row, Image, Col } from 'antd'
import React from 'react'
import imageBook from '../../images/download.png'
import { WrapperAuthor, WrapperBookName, WrapperDescription } from './style'

const BookDetailComp = () => {
  return (
    <Row>
      <Col span={10}>
        <Image src={imageBook}></Image>
      </Col>
      <Col span={14}>
        <WrapperBookName>Art of War</WrapperBookName>
        <WrapperAuthor>Sun Tzu</WrapperAuthor>
        <WrapperDescription>The Art of War is an ancient Chinese military treatise dating from the late Spring and Autumn Period. The work, which is attributed to the ancient Chinese military strategist Sun Tzu, is composed of 13 chapters.</WrapperDescription>
      </Col>
    </Row>
  )
}

export default BookDetailComp