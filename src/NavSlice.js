
import {createSlice} from '@reduxjs/toolkit'


export const NavSlice = createSlice({

    // name
    name: 'sideNavSlice',

    // Initial State
    initialState:{
        sideNav: false,
    },


    // Reducers
    reducers:{

        ShowSideNav:(state, action)=>{
            state.sideNav  = action.payload
        }
    }

})
export const {ShowSideNav}= NavSlice.actions
export default NavSlice.reducer