import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL_KILLABEARS;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_OPENSEA;


export const fetchDataKillabears = createAsyncThunk('datas/fetchDataKillabears', async () => {
    try {
        const response = await axios.get(apiUrl, {
            method : "GET",
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




const killabearsSlice = createSlice({
    name : 'datas',
    initialState : {
        loading : false,
        data : [],
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchDataKillabears.pending, (state) => {
            state.loading = true
            state.error = null 
        })
        .addCase(fetchDataKillabears.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        .addCase(fetchDataKillabears.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

    }
})



export default killabearsSlice.reducer;