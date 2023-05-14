import { useState } from "react";
import styled from "styled-components";
import axios from "axios"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
 
`;

const Register = () => {
const[user,setuser]=useState({
  name:"",
  lastname:"",
  email:"",
  password:"",
  reEnterPassword:""
})

const handlechange=(e)=>{
  setuser(prev=>({
     ...prev,
    [e.target.name]:e.target.value
})
  )
}

const handleregister = async (e)=>{
  e.preventDefault()
  const{name,email,password,reEnterPassword}=user
  if(name && email && password && (password===reEnterPassword)){
    try {
      const res =await axios.post("http://localhost:3001/register",user)
      console.log({res})
    } catch (error) {
        console.log({error})
    }
 
 
  }
  else{
    alert("Invalid Input")
  }
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleregister}>
          <Input placeholder="name" name="name" onChange={handlechange} />
          <Input placeholder="lastname" name="lastname" onChange={handlechange} />
          <Input placeholder="email" name="email" onChange={handlechange} />
          <Input placeholder="password"  name="password" onChange={handlechange} />
          <Input placeholder="confirm password"  name="reEnterPassword" onChange={handlechange} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;