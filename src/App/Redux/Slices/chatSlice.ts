import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
    chatOpen: boolean;
}

const initialState: ChatState = {
    chatOpen: true, // Defaulting to true as per your automation requirement
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        openChat: (state) => {
            state.chatOpen = true;
        },
        closeChat: (state) => {
            state.chatOpen = false;
        },
        toggleChat: (state) => {
            state.chatOpen = !state.chatOpen;
        },
        // Allows setting explicitly if needed from deep pipeline components
        setChatState: (state, action: PayloadAction<boolean>) => {
            state.chatOpen = action.payload;
        },
    },
});

export const { openChat, closeChat, toggleChat, setChatState } = chatSlice.actions;
export default chatSlice.reducer;