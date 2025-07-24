import { configureStore, createSlice } from '@reduxjs/toolkit' 
import counterReducer from '../Features/counter/counterSlice'                                               


export const store = configureStore ({
    reducer: {
       counter : counterReducer,
    } ,
})


///strep 

// create store
//wrap component under Provider
//create createSlice
//register