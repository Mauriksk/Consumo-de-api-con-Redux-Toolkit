import { createSlice } from "@reduxjs/toolkit"
//Axios
import axios from "axios";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers:{
        setUsersList: (state, action) =>{
            state.list = action.payload
        }
    }
})

export const { setUsersList } = userSlice.actions

export default userSlice.reducer;

export const fetchAllUsers = () =>{
    return (dispatch) => {
        axios.get('https://reqres.in/api/users?page=2')
            .then((response)=>{
                dispatch(setUsersList(response.data.data))
            })
            .catch((error)=> console.log(error))
    }
}