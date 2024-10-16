import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    table: null
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
    },
});

export const {
    addTable, emptyTable
} = tableSlice.actions;

export default tableSlice.reducer;
