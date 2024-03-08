import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL_REMILIO;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_OPENSEA;

export const fetchDataRemelio = createAsyncThunk('datas/fetchDataRemelio', async () => {
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


const remelioSlice = createSlice({
    name : 'datas',
    initialState : {
        loading : false,
        data : [],
        error : null,
    },
    reducers : {},
    extraReducers : (builder) => {
       builder
       .addCase(fetchDataRemelio.pending, (state) => {
           state.loading = true
           state.error = null 
       })
       .addCase(fetchDataRemelio.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
       })
       .addCase(fetchDataRemelio.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
       })

    }
})


export const statusLoading = (state)=> state.datas.loading;
export const statusError = (state)=> state.datas.error;



export default remelioSlice.reducer;
