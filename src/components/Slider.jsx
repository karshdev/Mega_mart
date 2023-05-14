import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import { sliderItems } from '../data.js';
import { mobile } from '../response';
const Container = styled.div`
display:flex;
width:100%;
height:calc(100vh - 10vh);
overflow:hidden;
position:relative;
${mobile({ display: "none" })}
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props => props.direction === "left" && '10px'};
right:${props => props.direction === "right" && '10px'};
margin:auto;
cursor:pointer;
opacity:0.7;
z-index:10;
`


const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${(props)=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props => props.bg}

`
const ImgContainer = styled.div`
height:100%;
flex:1;
`
const Image = styled.img`
height:80%;

`
const InfoContainer = styled.div`
padding:50px;
flex:1;
`
const Title = styled.h1`
font-size:70px
`
const Desc = styled.p`
margin:30px 0;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
`
export default function Slider() {
    const[slideIndex,setslideindex]=useState(0)

const handleClick=(direction)=>{
    if(direction==="left"){
        setslideindex(slideIndex > 0 ? slideIndex -1 : 1)
    }else{
        setslideindex(slideIndex < 1 ? slideIndex + 1 : 0)
    }

}

    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowBackIosIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item =>(
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}>

                        </Image>

                    </ImgContainer>
                    <InfoContainer>
                        <Title>
                            {item.title}
                        </Title>
                        <Desc>
                        {item.desc}
                        </Desc>
                        <Button>
                        SHOP NOW
                        </Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowForwardIosIcon />
            </Arrow>

        </Container>
    )
}
