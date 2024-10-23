import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    table: null,
    payment: ''
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addTable: (state, action) => {
            state.table = action.payload
        },
        emptyTable: (state) => {
            state.table = null;
        },
        makePayment: (state, action) => {
            state.payment = action.payload;
        },
        cancelPayment: (state) => {
            state.payment = '';
        },
    },
});

export const {
    addTable, emptyTable, makePayment, cancelPayment
} = tableSlice.actions;

export default tableSlice.reducer;
