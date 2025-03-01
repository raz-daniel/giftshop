import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Present from "../models/Present"


interface NewState {
    currentPresent: Present | null 
    isNewPresent: boolean,
}

const initialState: NewState = {
    currentPresent: null,
    isNewPresent: false,
}

export const newSlice = createSlice({
    name: 'New',
    initialState,
    reducers: {
        setCurrentPresent: (state, action: PayloadAction<Present | null>) => {
            state.currentPresent = action.payload
        },
        setNewPresent: (state, action: PayloadAction<boolean>) => {
            state.isNewPresent = action.payload
            
        }
    }
})

export const {setCurrentPresent, setNewPresent} = newSlice.actions

export default newSlice.reducer