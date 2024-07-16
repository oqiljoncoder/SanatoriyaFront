import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useDeleteNews = defineStore('deleteNews', () =>{
    function newsDelete(id){
        return new Promise((resolve, reject) =>{
            client.delete('/new_pages/' + id)
                .then(() =>{
                    console.log("Katta ishdan ketti")
                    resolve()
                } )
                .catch(() =>{
                    console.log("Kattalar olishda xatolik")
                    reject()
                })
        })
    }

    return {newsDelete}
})