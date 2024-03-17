import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apikey = import.meta.env.VITE_REACT_APP_API_KEY_NEWS_API

export const fetchCryptoNews = createAsyncThunk('datas/fetchCryptoNews', async () => {
    try {
        const response = await axios('https://newsapi.org/v2/everything?q=cryptocurrency', {
            headers: {
                'Authorization' : apikey
            }
        })
        return response.data?.articles
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        throw error;
    }
})

const datasCrpytoNews = createSlice({
    name: 'datas',
    initialState: {
        data : [],
        showLoader : true,
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchCryptoNews.pending, (state) => {
            state.showLoader = true
        })
        .addCase(fetchCryptoNews.fulfilled, (state, action) => {
           state.showLoader = false
           state.data = action.payload
        })
        .addCase(fetchCryptoNews.rejected, (state) => {
            state.showLoader = true
        })
    }
})


export default datasCrpytoNews.reducer;