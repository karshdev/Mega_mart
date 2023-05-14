import React, { useState } from 'react'
import { popularProducts } from '../data.js'
import Product from './Product'
import styled from 'styled-components'
import { useEffect } from 'react'

const Container=styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;

`

export default function Products({cat,filter,sort}) {
  const[data,setdata]=useState(popularProducts)
useEffect(()=>{
  if(filter?.color){
const res=popularProducts.filter(item=>item.category===filter?.color)
setdata(res)
  }else{
    setdata(popularProducts)
  }

},[filter])
  return (
    <Container>

{data.map(item=>(

<Product item={item} key={item.id}/>
))}
    </Container>
  )
}
