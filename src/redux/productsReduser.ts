import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "components/Products/productsArray";

const initialState:Product[] =[]

export const fetchProducts = createAsyncThunk<Product[], undefined>('products/fetchProducts',
async () => {
  const response = await axios.get('https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6')
  return response.data.products
}
)

export const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers(builder){
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return state= action.payload
    })
  }
})

export default productsSlice.reducer 