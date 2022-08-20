import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

type ProductProps ={
  name:string
  description:string
  type:string
  capacity:number
  price:number

}

const ProductListItem = ({
  name, 
  description, 
  type,
  capacity, 
  price
}:ProductProps) => {
  return (
    <Card>
      <CardContent>
      <h3 className='product-title'>{name}</h3>
      <div className='product-description'>{description}</div>
      <div className='product-features'>Type: {type}</div>
      <div className='product-features'>Capacity: {capacity}Gb</div>
      <div className='product-price'>$ {price}</div>
      </CardContent>     
      <CardActions className='btn-wrap'>
        <Button variant='outlined'> Add to card  </Button>
      </CardActions>
    </Card>
  )
}

export default ProductListItem 