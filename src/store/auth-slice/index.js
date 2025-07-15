
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



const initialState = {
    isAuthenticated: false,
    isLoading:false,
    user: null,
};


export const registerUser = createAsyncThunk('auth/registerUser',
        async (formDatata) => {
            const responnse = await axios.post('')
        

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated(state, action) {

        }
    }})


    export const {setUser} = authSlice.actions;
    export default authSlice.reducer;