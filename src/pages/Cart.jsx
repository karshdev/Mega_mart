import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import Announcement from "../components/Announcemet";
import Footer from "../components/Fotter";
import Navbar from "../components/Navbar";
import { mobile } from '../response';
import { getTotal, removeCart, removeFromCart } from '../redux/cartSlice';
import { updateCart } from '../redux/cartSlice';
import { Navigate, useNavigate } from 'react-router-dom';
const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
 
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const item = useSelector(state => state.cart.cartItems)
  const price = useSelector(state => state.cart.cartTotalAmount)
  useEffect(() => {
    dispatch(getTotal(item[0]))
  }, [])
  const removeclick = (value) => {
    dispatch(removeCart(value))
    dispatch(getTotal(value))
  }

  const addclick = (value) => {
    dispatch(updateCart(value))
    dispatch(getTotal(value))
  }
  const changeroute = () => {
    navigate("/")
  }
  const removeItemFromCart = (value) => {
    dispatch(removeFromCart(value))
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={changeroute}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({item.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {item.map((value) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={value[0].img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {value[0].name}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> 93813718293
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size:</b> 37.5
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <RemoveIcon onClick={() => removeclick(value)} sx={{
                        cursor: "pointer"
                      }} />
                      <ProductAmount>{value.cartQuantity >= 1 ? value.cartQuantity : removeItemFromCart(value)}</ProductAmount>
                      <AddIcon onClick={() => addclick(value)} sx={{
                        cursor: "pointer"
                      }} />
                    </ProductAmountContainer>
                    <Button style={{
                      width: "50%"
                    }}
                      onClick={() => removeItemFromCart(value)}
                    >Remove</Button>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}

          </Info>

          <Summary style={{ display: item.length <= 0 ? "none" : "block" }}>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${price}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${price - 5.90}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

    </Container>
  );
};

export default Cart;