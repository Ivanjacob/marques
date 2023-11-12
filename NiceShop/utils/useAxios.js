import axios from "axios"
import jwt_decode from "jwt-decode"
import dayjs from "dayjs"
import {useContext} from "react"
import AuthContext from "../Context/AuthContext"
import AsyncStorage from "@react-native-async-storage/async-storage"

const baseURL = "http://192.168.88.253:8000/api/"

const useAxios = () => {
    const {authTokens, setUSer, setAuthTokens} = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL,
        headers: {Authorization: `Bearer ${authTokens?.access}` }
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

        if (!isExpired) return req;

        const response = await axios.post(`${baseURL}/token/refresh/`, {
            refresh: authTokens.refresh
        });
        AsyncStorage.setItem("authTokens", JSON.stringify(response.data));
        AsyncStorage.setItem("authTokens", JSON.stringify(response.data));

        setAuthTokens(response.data);
        setUSer(jwt_decode(response.data.access));

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req
    });
    
    return axiosInstance;

    
};
 
export default useAxios;

