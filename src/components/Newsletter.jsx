import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../response';
const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-contente:center;
flex-direction:column;
`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Description = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
width:30%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
${mobile({ width: "80%" })}
`
const Input = styled.input`
border:0;
flex:4;
&:focus{
    outline:none;
}
`
const Button = styled.button`
border:0;
flex:0.7;
background-color:teal;
color:white;
`

export default function Newsletter() {
    return (
        <Container>
            <Title>
                NewsLetter  
            </Title>
            <Description>
                Get Timely Updates From Your Favourite Products.
            </Description>
            <InputContainer>
                <Input placeholder="Your email.."/>
                <Button>
                    <SendIcon />
                </Button>

            </InputContainer>
        </Container>
    )
}
