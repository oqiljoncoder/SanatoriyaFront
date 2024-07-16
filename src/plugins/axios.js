import axios from "axios";
import {useEnv} from "@/stores/env.js";

const {url} = useEnv()
axios.defaults.baseURL= url +'/api'
axios.interceptors.request.use((config) => {

    if (config.url !== '/users/auth'){
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }


    return config
})

export {axios as client}