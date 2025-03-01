import { configureStore } from "@reduxjs/toolkit";
import { newSlice } from "./newSlice";
import { giftsSlice } from "./giftsSlice";

const store = configureStore({
    reducer: {
        gifts: giftsSlice.reducer,
        new: newSlice.reducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch