import {combineReducers, configureStore} from '@reduxjs/toolkit';
import messageReducer from './slices/message';

const rootReducer = combineReducers({
    message: messageReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export default store
