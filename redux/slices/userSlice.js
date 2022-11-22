import {createAsyncThunk, createSlice, current} from '@reduxjs/toolkit'
import AuthService from "../../src/api/auth.service";

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
}

export const login = createAsyncThunk(
    "auth/login",
     async ({email, password}, thunkAPI) => {

        try {
            const data = await AuthService.loginApi({email, password});
            // thunkAPI.dispatch(setMessage(response.data.message));
            return {user: data};
        } catch (error) {
            console.log('error userSlice')
            // const message =
            //     (error.response &&
            //         error.response.data &&
            //         error.response.data.message) ||
            //     error.message ||
            //     error.toString();
            // thunkAPI.dispatch(setMessage(message));
            // return thunkAPI.rejectWithValue();
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers:  (builder) => {
        builder.addMatcher(
            (action) => action.type.endsWith('/fulfilled'),
            (state, action) => {
                console.log()
                console.log('success')
                console.log(current(state))
                state.isLoggedIn = true;
                state.user = action.payload.user;
                console.log('--success--')

                console.log(current(state))
            }
        )},
})

export default userSlice.reducer


/*
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {setMessage} from "./messageSlice";
import AuthService from "../../src/api/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async ({name, phone, email, password}, thunkAPI) => {
        try {
            const response = await AuthService.register(name, phone, email, password);
            thunkAPI.dispatch(setMessage(response.data.message));
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}, thunkAPI) => {
        try {
            const data = await AuthService.login({email, password});
            return {user: data};
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                // matcher can be defined inline as a type predicate function
                (action) => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.isLoggedIn = true;
                    state.user = action.payload.user;
                }
            )
            // matcher can just return boolean and the matcher can receive a generic argument
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoggedIn = false;
                    state.user = null;
                }
            )
    }
});


export default authSlice.reducer;
 */