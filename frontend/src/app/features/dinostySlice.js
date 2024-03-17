import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL_DINOSTY;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_OPENSEA;

export const fetchDataDinosty = createAsyncThunk('datas/fetchDataDinosty', async () => {
    try {
        const response = await axios.get(apiUrl, {
            headers : {
                accept : 'application/json',
                'x-api-key': `${apiKey}`
            }
        })
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message);
        throw error;
    }
})


const dinostysSlice = createSlice({
    name : 'datas',
    initialState : {
        status : 'idle',
        data : [],
    },
    reducers : {},
    extraReducers : (builder) => {
       builder
       .addCase(fetchDataDinosty.pending, (state, action) => {
           state.status = 'pending'
       })
       .addCase(fetchDataDinosty.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
       })
       .addCase(fetchDataDinosty.rejected, (state, action) => {
        state.status = 'error'
       })

    }
})


export const statusLoading = (state)=> state.datas.loading;
export const statusError = (state)=> state.datas.error;



export default dinostysSlice.reducer;
