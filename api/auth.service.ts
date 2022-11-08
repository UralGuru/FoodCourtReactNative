import axios from 'axios';

type UserRegistration = {
    email: string,
    phone: string,
    name: string,
    password: string
};

type UserLogin = {
    email: string,
    password: string
};

type GetUsersResponse = {
    data: UserRegistration[];
};

const tokenAPI = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRqc2hwbGlzQGdtYWlsLmNvbSIsInN1YiI6ImM2NWM2MDRmLTE5M2YtNDhiZS05ZDhiLWE5YTUxMWUzNGNhNiIsInJvbGVzIjoidXNlciIsImV4cCI6MTY3MDQ5MTIxNSwiaXNzIjoiRm9vZGNvdXJ0QXBwLkFQSSIsImF1ZCI6IkZvb2Rjb3VydEFwcC5DbGllbnQifQ.L213BhjBjAtRtaLQSrBCOFau2A1JlIJAi37uzNC3RyE`;
const API_URL = "http://51.250.9.6:8080/v1.0/";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://51.250.9.6:8080/v1.0/',
    headers: {
        Authorization: `Bearer ${tokenAPI}`
    }
});

class AuthService {
    login(formValue: UserLogin) {
        return axios
            .post(API_URL + "auth/login", formValue)
            .then(response => {
                if (response.data.accessToken) {
                    console.log(response.data.accessToken)
                    // localStorage.setItem("user", JSON.stringify(response.data));
                }

                console.log(response.data);
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    // register(username: string, email: string, password: string) {
    //     return axios.post(API_URL + "signup", {
    //         username,
    //         email,
    //         password
    //     });
    // }

    // register( email: string, password: string, name: string, phone: string) {
    register( formValue: UserRegistration) {
        console.log(formValue);
        return instance.post("auth/registration", formValue)
            .then((response) => console.log(response.data))
            .catch(error => console.log(error))
            .finally(() => console.log('...'))
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService();
