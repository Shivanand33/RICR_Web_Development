import axios from "axios";

const axiosInstance = axios.create({
    baseURl:"http://localhost:4500"
})

export default axiosInstance;
