import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL_GOBLINTOWN;
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_OPENSEA;


export const fetchDataGoblin = createAsyncThunk('datas/fetchDataGoblin', async () => {
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



const goblinSlice = createSlice({
    name : 'datas',
    initialState : {
        status : 'idle',
        data : [],
        error : null
    },
    reducers : {},
    extraReducers : (builder) => {
       builder
       .addCase(fetchDataGoblin.pending, (state, action) => {
           state.status = 'pending'
       })
       .addCase(fetchDataGoblin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
       })
       .addCase(fetchDataGoblin.rejected, (state, action) => {
       state.status = 'error'
       state.error = action.error.message
       console.log(action.payload)
       })

    }
})


export const statusLoading = (state)=> state.datas.loading;
export const statusError = (state)=> state.datas.error;



export default goblinSlice.reducer;
