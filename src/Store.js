import {configureStore} from '@reduxjs/toolkit'

import SideNavSlice from './NavSlice'


const Store = configureStore({

    reducer:{
      
        sideNavSlice: SideNavSlice,
    }
})

export default Store