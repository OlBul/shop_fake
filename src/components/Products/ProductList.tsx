import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'
import {ProductProps} from './ProductListItem'


type Props ={}

const ProductList = (props: Props) => {
  return (
    <>
    <Typography variant='h4' textAlign="center" margin={3}>
      Product List
      </Typography> 

      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      >
        {productsArray.map(({id,name, description, type, capacity, price, image}: ProductProps, i) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
          <ProductListItem           
          name={name}
          description={description} 
          type={type} 
          capacity={capacity}
          price={price}
          image={image}
          /> 
          </Grid>
          
        )) }
        </Grid>      
    </>
  )
}

export default ProductList