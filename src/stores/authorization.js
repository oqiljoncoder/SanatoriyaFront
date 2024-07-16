import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";
import {config} from "@fortawesome/fontawesome-svg-core";



export const useAuthorization = defineStore('authorization', () =>{
    let errorAuth =  reactive({
        error: ''
    });
    function userAuth(data){
        return new Promise((resolve, reject) =>{
            client.post('/users/auth', data)
                .then((res) =>{
                    console.log("Avtorizatsiya qilindi")
                    localStorage.setItem('token', res.data.token)
                    console.log(res.data.token)
                    resolve()
                } )
                .catch(() =>{
                    errorAuth.error = "Email yoki parolda xatolik bor"
                    console.log("Avtorizatsiya qilishda xatolik")
                    reject()
                })
        })
    }

    return {userAuth, errorAuth}
})