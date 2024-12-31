import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostState = {
    uuid: string
}

const initialState: PostState = {
    uuid: ""
}

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addUuid: ((state, action: PayloadAction<string>) => {
            state.uuid = action.payload;
        })
    }
})

export const { addUuid } = postSlice.actions