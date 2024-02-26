import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, data) => {
            state.cart.push(data.payload)
            console.log('state.cart', state.cart)
        },
        removeFromCart: (state, data) => {
            // state.cart.splice()
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice