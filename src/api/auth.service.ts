import axios from "axios";
import {loginType, registerType} from "../constants/types";

const API_URL = "http://food-court.tk/api/v1.0/";
// const API_URL = "https://192.168.0.200:7777/v1.0/";

const register = ({name, phone, email, password}:registerType) => {
    console.log({name, phone, email, password})
    return axios.post(API_URL + "auth/registration", {name, phone, email, password,})
        .then((res)=>console.log(res.data));
};

const loginApi = ({email, password}: loginType) => {
    // console.log('auth.service', email, password)
    return axios
        .post(API_URL + "auth/login", {email, password})
        // .post(API_URL + "/auth/account/external-login?provider=Google&backUrl=/home", {email, password})
        .then((response) => {
            if (response.data.isSuccess) {
                // localStorage.setItem("user", JSON.stringify(response.data));
                // console.log(response.data)

            }
            return response.data;
        }).catch(e=>console.log(e));
};

const logout = () => {
    // localStorage.removeItem("user");
    // return axios.post(API_URL + "signout").then((response) => {
    //     return response.data;
    // });
    console.log("logout")
    return {
        loading: false,
        userInfo: {},
        userToken: null,
        error: null,
        success: false,
    }
};

const getCurrentUser = () => {
    // return JSON.parse(localStorage.getItem("user"));
    return "getCurrentUser"
};

const AuthService = {
    register,
    loginApi,
    logout,
    getCurrentUser,
}

export default AuthService;
