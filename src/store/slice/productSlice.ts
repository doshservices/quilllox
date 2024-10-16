import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../../utils/interface";

const initialState: ProductsState = {
    items: [],
    products: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToProducts: (state, action) => {
            state.products = action.payload
        },
        addToCart: (state, action) => {
            const { payload } = action;
            const itemInCart = state.items.find(item => item._id === payload._id);
            if (itemInCart) {
                itemInCart.quantity++;
                itemInCart.totalPrice = itemInCart.price * itemInCart.quantity;
            } else {
                state.items.push({
                    ...payload,
                    quantity: 1,
                    totalPrice: payload.price
                });
            }
        },
        incrementQuantity: (state, action) => {
            const { payload } = action;
            const item = state.items.find(item => item._id === payload);
            if (item) {
                item.quantity++;
                item.totalPrice = item.price * item.quantity;
            }
        },
        decrementQuantity: (state, action) => {
            const { payload } = action;
            const item = state.items.find(item => item._id === payload);
            if (item && item.quantity > 1) {
                item.quantity--;
                item.totalPrice = item.price * item.quantity;
            }
        },
        removeItem: (state, action) => {
            const { payload } = action;
            state.items = state.items.filter(item => item._id !== payload);
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

export const {
    emptyCart,
    addToCart,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    addToProducts
} = productSlice.actions;

export default productSlice.reducer;
