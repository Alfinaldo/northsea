import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apikey = import.meta.env.VITE_REACT_APP_API_KEY_NEWS_API

export const fetchNftsNews = createAsyncThunk('datas/fetchNftsNews', async () => {
    try {
        const response = await axios('https://newsapi.org/v2/everything?q=nfts', {
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

const datasNftsNews = createSlice({
    name: "datas",
    initialState: {
        data: [],
        showLoader: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNftsNews.pending, (state) => {
            state.showLoader = true
        })
        .addCase(fetchNftsNews.fulfilled, (state, action) => {
            state.showLoader = false
            state.data = action.payload
        })
        .addCase(fetchNftsNews.rejected, (state) => {
            state.showLoader = true
        })
    }
})

export default datasNftsNews.reducer;