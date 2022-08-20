import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

type Props ={}

const ProductListItem = (props:Props) => {
  return (
    <Card>
      <CardContent>
      <h4 className='product-title'>iPhone X</h4>
      <div className='product-description'>This is iPhone X</div>
      <div className='product-features'>Type: phone</div>
      <div className='product-features'>Capacity: 64Gb</div>
      <div className='product-price'>$ 500</div>
      </CardContent>     
      <CardActions>
        <Button variant='contained'> Add to card  </Button>
      </CardActions>
    </Card>
  )
}

export default ProductListItem 