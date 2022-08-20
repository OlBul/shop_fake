import { Container } from '@mui/material'
import ProductList from 'components/Products/ProductList'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
  return (
    <>
    <Container>
      <ProductList/>
    </Container>
    </>
  )
}

export default Main