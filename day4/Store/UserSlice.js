import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'
// import hostName from '../config';
// export const loginUser=createAsyncThunk(
//     'user/loginUser',
//     async(userCredential)=>{
//         const request=await axios.post(``)
        
//     }
// );
const userSlice=createSlice({
    name:'user',
    initialState:{
        loading:false,
        user:null,
        error:null
    }
});
export default userSlice.reducer;