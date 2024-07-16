import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {useRouter} from "vue-router";
import {ref} from "vue";



export const useAddNews = defineStore('addNews', () =>{
    const router = useRouter()
    let i = ref(0)
    function addNews(data){
        return new Promise((resolve, reject) =>{
            client.post('/postNews', data)
                .then(() =>{
                    console.log("Post Qo'shildi")
                    resolve()
                } )
                .catch(() =>{
                    console.log("Post Qo'shilda xatolik")
                    i.value++;
                    if (i.value>3){
                        router.push('/login')
                    }
                    reject()
                })
        })
    }

    return {addNews}
})