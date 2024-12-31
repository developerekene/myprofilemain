import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./Slices/posts";


export const store: any = configureStore({
    reducer: {
        posts: postSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;