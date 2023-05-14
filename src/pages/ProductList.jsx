import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcemet";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Fotter";
import { mobile } from '../response';
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setfilter] = useState({});
  const [sort, setsort] = useState("newest");
  const handlefilters = (e) => {
    const value = e.target.value;
    setfilter({
      ...filter,
      [e.target.name]: value,
    })
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handlefilters}>
            <Option>
              color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>

          </Select>
          <Select name="size" onChange={handlefilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>

          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setsort(e.target.value)}>
            <Option value="newest" selected>Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
  
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
