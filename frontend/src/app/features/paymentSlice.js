import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPayment = createAsyncThunk('payment/createPayment', async ({
    total, itemName, quantity, identifier
}) => {
    try {
        const response = await fetch('https://localhost:3000/create-payment', {
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ total, itemName, quantity, identifier})
        });
        return response.json()
    } catch (error) {
        throw new Error(error.response.data.message);
    }

})

const datasPayment = createSlice({
    name : 'payment',
    initialState : {
        paymentStatus : 'idle',
        paymentData : {},
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(createPayment.pending, (state) => {
            state.paymentStatus = 'loading'
        })
        .addCase(createPayment.fulfilled, (state, action) => {
            state.paymentStatus = 'succeeded'
            state.paymentData = action.payload
        })
        .addCase(createPayment.rejected, (state) => {
            state.paymentStatus = 'failed';
          
        })
    }
})

export default datasPayment.reducer