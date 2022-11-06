import axios from 'axios';

type User = {
    email: string,
    phone: string,
    name: string,
    password: string
};

type GetUsersResponse = {
    data: User[];
};

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://192.168.0.200:7777/v1.0/',
    headers: {
        Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQG1haWwucnUiLCJzdWIiOiJhOTg5YmM3MS00ODJiLTQ0NTUtYTA5NC1hYWYxMWZiMTAzNmQiLCJyb2xlcyI6InVzZXIiLCJleHAiOjE2Njk4ODE0MTUsImlzcyI6IkZvb2Rjb3VydEFwcC5BUEkiLCJhdWQiOiJGb29kY291cnRBcHAuQ2xpZW50In0.vzD397eXEck6S4bUX5xHvi6UZBiw99xVuSPsicbf2ng",
    }
});

const tokenAPI = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQG1haWwucnUiLCJzdWIiOiJhOTg5YmM3MS00ODJiLTQ0NTUtYTA5NC1hYWYxMWZiMTAzNmQiLCJyb2xlcyI6InVzZXIiLCJleHAiOjE2Njk4ODE0MTUsImlzcyI6IkZvb2Rjb3VydEFwcC5BUEkiLCJhdWQiOiJGb29kY291cnRBcHAuQ2xpZW50In0.vzD397eXEck6S4bUX5xHvi6UZBiw99xVuSPsicbf2ng`;
const API_URL = "https://192.168.0.200:7777/v1.0/";

class CofeService {
    register() {
        return axios.get("https://192.168.0.200:7777/v1.0/cafes")
            .then((response) => console.log(response.data.totalCount))
            .catch(error => console.log(error))
            .finally(() => console.log('...'))
    }
}

export default new CofeService();
