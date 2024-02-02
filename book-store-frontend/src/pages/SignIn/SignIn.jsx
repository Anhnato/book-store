import React from 'react'
import { WrapperContainer, WrapperTextLink } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { WrapperBookName } from '../../components/BookDetail/style'

const SignIn = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
        <div style={{ width: '800px', height: '600px', background: '#fff', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <WrapperContainer>
                <WrapperBookName>Sign In</WrapperBookName>
                <InputForm placeholder="Your email"/>
                <InputForm placeholder="Your password"/>
                <ButtonComponent
                    size={40}
                    styleButton={{
                        background: 'rgb(255, 57, 69)',
                        height: '48px',
                        width: '100%',
                        border: 'none',
                        borderRadius: '4px',
                        margin: '26px 0 10px'
                    }}
                    textbutton={'Sign In'}
                    styleTextButton={{ color: '#fff', fontSize: '18px' }}></ButtonComponent>
                    <p style={{ fontSize: '20px'}} >Don't have an account yet?<WrapperTextLink>Sign up</WrapperTextLink></p>
            </WrapperContainer>
        </div>
    </div>
  )
}

export default SignIn