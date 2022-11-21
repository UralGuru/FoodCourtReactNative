import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice";

// const RootReducers = combineReducers({
//
// })

export const store = configureStore({
    auth: authReducer
});

/*
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";

const reducer = {
    auth: authReducer,
    message: messageReducer
}

export const store = configureStore({
    reducer: reducer,
    devTools: true,
});
*/


// import authReducer from "./slices/authSlice";
// import messageReducer from "./slices/messageSlice";
//
// const reducer = {
//     auth: authReducer,
//     message: messageReducer
// }
//
// export const store = configureStore({
//     // reducer: reducer,
//     // devTools: true,
// });
