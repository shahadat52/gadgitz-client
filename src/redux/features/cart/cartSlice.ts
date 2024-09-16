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
}
const initialState: CartState = {
    products: []
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
        }


    },
})

export const { addToCart, cartEmpty } = cartSlice.actions


export default cartSlice.reducer