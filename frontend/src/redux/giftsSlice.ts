import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import Present from "../models/Present"


interface GiftsState {
    presents: Present[]
    selectedCategoryId: string | null
    isLoading: boolean
}

const initialState: GiftsState = {
    presents: [],
    selectedCategoryId: null,
    isLoading: false
}

export const giftsSlice = createSlice({
    name: 'Gifts',
    initialState,
    reducers: {
        setPresents: (state, action: PayloadAction<Present[]>) => {
            state.presents = action.payload
        },
        setSelectedCategory: (state, action: PayloadAction<string | null>) => {
            state.selectedCategoryId = action.payload
        },
        addPresent: (state, action: PayloadAction<Present>) => {
            state.presents = [action.payload, ...state.presents]
        },
        removePresent: (state, action: PayloadAction<string>) => {
            state.presents = state.presents.filter(p => p.id !== action.payload)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const {setPresents, setSelectedCategory, addPresent, removePresent, setLoading} = giftsSlice.actions

export default giftsSlice.reducer