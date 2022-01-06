import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:5000/items')
    .then(res=> res.json())
    return response
  }
)

export const Productslice = createSlice({
    name: 'product',
    initialState: {
      discover: [],
    },
    extraReducers: (builder) =>{
      builder.addCase(fetchProducts.fulfilled, (state, action) =>
      {
        state.discover = action.payload;
      })
    }
  })
  
  
  export default Productslice.reducer;