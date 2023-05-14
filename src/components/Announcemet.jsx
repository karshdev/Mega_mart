import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:30px;
background-color:teal;

display:flex;
align-items:center;
justify-content:center;
font-size:14px;
color:white;
`


export default function Announcemet() {
  return (
    <Container>
        Big deal!Now shoes at only Rs.299
    </Container>
  )
}
