import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {useRouter} from "vue-router";
import {ref} from "vue";



export const useAddTariffs = defineStore('addTariffs', () =>{
    const router = useRouter()
    let i = ref(0)
    let errorSignal =('')
    function addTariffs(data){
        return new Promise((resolve, reject) =>{
            client.post('/postTariff', data)
                .then(() =>{
                    console.log("Tariff Qo'shildi")
                    resolve()
                } )
                .catch(() =>{
                    console.log("Tariff Qo'shilda xatolik")
                    errorSignal = 'error'
                    i.value++;
                    if (i.value>3){
                        router.push('/login')
                    }
                    reject()
                })
        })
    }

    return {addTariffs}
})