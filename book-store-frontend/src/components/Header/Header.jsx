import { Col } from 'antd'
import React from 'react'
import { Wrapper, WrapperText } from './stule'
import {
    UserOutlined,
  } from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const Header = () => {
    return (
        <div>
            <Wrapper>
                <Col span={6}><WrapperText>Book Store</WrapperText></Col>
                <Col span={12}>
                <ButttonInputSearch
                    size="large"
                    bordered={false}
                    textbutton="Search"
                    placeholder="input search text"
                    //onChange={onSearch}
                />
                </Col>
                <Col span={6}>
                    <div>
                        <UserOutlined style={{ fontSize: '30px' }}/>
                        <div>
                            <span>Loign/Singup</span>
                        </div>
                    </div>
                </Col>
            </Wrapper>
        </div>
    )
}

export default Header