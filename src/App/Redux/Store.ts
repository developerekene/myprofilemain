import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./Slices/chatSlice";
import { postSlice } from "./Slices/posts";


export const store: any = configureStore({
    reducer: {
        posts: postSlice.reducer,
        chat: chatSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;