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
    reducers: {

    },
    extraReducers:  (builder) => {
        builder
            .addMatcher(
            (action) => action.type.endsWith('/fulfilled'),
            (state, action) => {
                state.isLoggedIn = true;
                state.acssessToken = action.payload.user.acssessToken;
                state.errors = action.payload.user.errors;
                state.expireDate = action.payload.user.expireDate;
                state.isSuccess = action.payload.user.isSuccess;
                state.message = action.payload.user.message;
                state.refreshToken = action.payload.user.refreshToken;
                console.log('--success--')
                console.log(current(state))
            }
        )},
})

export default userSlice.reducer
