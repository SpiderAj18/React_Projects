import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            state.status = false;
            state.userData =null;

        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }
     }

})

export default authSlice.reducer;