import React, { useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Info=styled.div`
opacity:0;
display:flex;
gap:1rem;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
align-items:center;
justify-content:center;
z-index:3;
transition:1s all ease;
`
const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
transition:1s all ease;
background-color:#F6E9E6;
position:relative;
&:hover{
  transform:scale(1.01);
}
&:hover ${Info}{
 opacity:1;

}
`
const Circle=styled.div`

`
const Image=styled.img`
height:75%;
z-index:2;
`
const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;

&:hover{
  background-color:#F6E9E6;
}
&:nth-child(3){
  background-color:${props=>props.color};
}
`



export default function Product({item}) {
  const[color,setcolor]=useState(false)
const handleClick=()=>{
setcolor(()=>setcolor(!color))
}
  return (
    <Container>
   <Circle/>
   <Image src={item.img}/>
<Info>
  <Icon>
    <Link to={`/product/${item.id}`}>
<AddShoppingCartIcon/>
</Link>
  </Icon> 
  <Icon>
<SearchIcon/>
  </Icon>
  <Icon color={`${color===false ? "white" : "tomato"}`}>
<FavoriteBorderIcon onClick={handleClick}/>
  </Icon>
</Info>
    </Container>
  )
}
