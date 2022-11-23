import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import userReducer from "./slices/userSlice"
import messageReducer from "./slices/messageSlice";

export default configureStore({
    reducer: {
        tasks: taskReducer,
        user: userReducer,
        message: messageReducer
    },
});