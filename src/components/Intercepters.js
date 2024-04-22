import axios from "axios";

const axiosInstance = axios.create({
    timeout: 4000,
})

axiosInstance.interceptors.request.use((config) => {
    console.log("request", config);
    config.headers["Adarsh"]="adarsh";
   
    return config;
},
    (error) => {
        console.log("Failed Request Data", error);
        return Promise.reject( error);
    }
);

axiosInstance.interceptors.response.use((response) => {
    console.log("response", response);
    return response;
},
    (error) => {
        console.log("failed to response data", error);
        return Promise.reject( error);
    }
);
export default axiosInstance