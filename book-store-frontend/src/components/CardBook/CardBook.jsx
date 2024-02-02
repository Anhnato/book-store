import { Card } from 'antd'
import React from 'react'
import { AuthorText, BookName } from './style'

const CardBook = () => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <BookName>Book Name</BookName>
        <AuthorText>
            Author
        </AuthorText>
    </Card>
  )
}

export default CardBook