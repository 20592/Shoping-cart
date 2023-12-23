import {createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
    name:"cart",//this cart state is access through useSelector incart.jsx
    initialState:[],//initialize with empty array
    reducers:{
        add:(state,action)=>{
      state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item) => item.id !== action.payload); 

        },
    }


});

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;

