import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'https://test.kiralacar.com/api/',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})
export default axiosInstance