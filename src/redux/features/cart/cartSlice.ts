import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

interface TProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    brand: string;
    features: string;
    isDeleted?: boolean;
};
interface CartState {
    products: TProduct[];
    address: string
}
const initialState: CartState = {
    products: [],
    address: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            state.products.push(action.payload)

        },
        cartEmpty: (state) => {
            state.products = []
        },
        saveAddress: (state, action) => {
            state.address = action.payload
        }


    },
})

export const { addToCart, cartEmpty, saveAddress } = cartSlice.actions


export default cartSlice.reducer