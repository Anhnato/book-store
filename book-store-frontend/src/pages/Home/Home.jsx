import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperProducts, WrapperTypeProduct } from './style'
import CardBook from '../../components/CardBook/CardBook'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const Home = () => {
    const arr = ['War', 'Love', 'Life']
  return (
    <>
        <div style={{ padding: '0 120px '}}>
            <WrapperTypeProduct>
                {arr.map((item) => {
                    return (
                        <TypeProduct name={item} key={item}/>
                    )
                })}
            </WrapperTypeProduct>
        </div>

        <div id='container' style={{ backgroundColor: '#efefef', padding: '0 120px'}}>
                <WrapperProducts>
                    <CardBook />
                    <CardBook />
                    <CardBook />
                    <CardBook />
                </WrapperProducts>

                <div style={{ width:'100%', display:'flex', justifyContent:'center', marginTop: '20px'}}>
                    <ButtonComponent textbutton="More books" type='outline' styleButton={{ border: '1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)', width: '240px', height: '40px'}}></ButtonComponent>
                </div>
        </div>
    </>
  )
}

export default Home