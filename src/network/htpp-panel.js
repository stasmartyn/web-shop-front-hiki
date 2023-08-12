import axios from "axios";
 const $API= axios.create({
    baseURL: "https://web-shop-hiki-b28548ba72e8.herokuapp.com/",
    headers: {
        "Content-type": "application/json; charset=utf-8"
    }
});

$API.interceptors.request.use(config => {
    const token = localStorage.getItem("token"); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default $API;