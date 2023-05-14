import React from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MailOutline, Phone, Room } from '@mui/icons-material';
import { mobile } from '../response';
const Container = styled.div`
display:flex;

`

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
margin:20px 0;
font-weight:300;
line-height:20px;
letter-spacing:1px;
`
const SocialContainer = styled.div`
display:flex;
gap:1rem;
`
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:#${props=>props.color};
display:felx;
align-items:center;
justify-content:center;
color:white;
`



const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


export default function Fotter() {
    return (
        <Container>
            <Left>
                <Logo>KARSHDEV.</Logo>
                <Desc>

                    Effective short descriptions provide enough context for a reader to understand what the topic conveys. A short description ought to contain keywords that help the reader identify whether the topic contains useful information. It should also be a concise description of the topic
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlinedIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <GitHubIcon />
                    </SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem >
          <Room style={{marginRight:"10px"}}/> Himachal Pradesh
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@KARSHDEV.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
      
    )
}
