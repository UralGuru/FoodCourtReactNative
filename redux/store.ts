import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import userReducer from "./slices/userSlice"

export default configureStore({
    reducer: {
        tasks: taskReducer,
        user: userReducer
    },
});