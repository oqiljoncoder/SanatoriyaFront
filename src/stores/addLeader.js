import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import router from "@/plugins/router.js";
import {useRouter} from "vue-router";
import {ref} from "vue";



export const useAddLeader = defineStore('addLeader', () =>{
    const router = useRouter()
    let i = ref(0)
    let errorSignal = ref('')
    function addLeader(data){
        return new Promise((resolve, reject) =>{
            client.post('/postLeader', data)
                .then(() =>{
                    console.log("Leader Qo'shildi")
                    resolve()
                } )
                .catch(() =>{
                    console.log("Leader Qo'shilda xatolik")
                    errorSignal.value = 'error'
                    i.value++;
                    if (i.value>3){
                        router.push('/login')
                    }
                    reject()
                })
        })
    }

    return {addLeader}
})