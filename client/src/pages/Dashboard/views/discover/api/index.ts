import axios from 'axios'
const axiosClient = axios
axiosClient.defaults.headers.common["x-api-key"] = String(process.env.REACT_APP_LOL_API_KEY)


export default axiosClient



