import axios from "axios";

const API_URL = "http://food-court.tk/api/v1.0/";
// const API_URL = "https://192.168.0.200:7777/v1.0/";

const register = (name, phone, email, password) => {
    return axios.post(API_URL + "auth/registration", {
        name,
        phone,
        email,
        password,
    });
};

const login = ({email, password}) => {
    console.log(email, password)
    return axios
        .post(API_URL + "auth/login", {
            email,
            password
        })
        .then((response) => {
            if (response.data.isSuccess) {
                // localStorage.setItem("user", JSON.stringify(response.data));
                console.log(response.data)
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
    return axios.post(API_URL + "signout").then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    // return JSON.parse(localStorage.getItem("user"));
    return "getCurrentUser"
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService;
