import React from 'react'
import styled from 'styled-components'
import { popularProducts} from "../data"

import Single_Product from "./Single_Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
       <Single_Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
