import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@mui/icons-material/Search';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from '@mui/material';
import { mobile } from '../response';
import { useSelector } from 'react-redux';
import { StartRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const Container = styled.div`
   height:60px;
   ${mobile({ height: "50px" })}
  
`;
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
align-items:center;
display:flex;
flex:1;
`;

const Language = styled.span`

font-size:14px;
cursor:pointer;
${mobile({ display: "none" })}

`;

const SearchContainer = styled.div`
margin-left:5px;
padding:5px;
align-items:center;
display:flex;
border:1px solid lightgray;
`

const Input = styled.input
  `
border:none;
&:focus {
    outline:none;
  }
  ${mobile({ width: "50px" })}
`

const Center = styled.div`
flex:1;
text-align:center;
${mobile({ fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" })}
`;

const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "18px" })}
`

const Right = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
gap:1rem;
flex:1;
${mobile({ flex: 2, justifyContent: "center", gap: "5px" })}  
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

export default function Navbar() {
  const quantity = useSelector(state => state.cart.cartItems)


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>

          </Language>
          <SearchContainer>
            <Input />
            <SearchIcon sx={{ "&:hover": { cursor: "pointer" }, color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            KARSHDEV.
          </Logo>
        </Center>
        <Right>
          <Link to="/register" style={{
            textDecoration:"none",
            color:"black"
          }}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login"
          style={{
            textDecoration:"none",
            color:"black"
          }}
          
          >
            <MenuItem>LOGIN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>

              <Badge badgeContent={quantity.length} color="secondary">
                <AddShoppingCartIcon color="action" />
              </Badge>

            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}
