import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";


export const useFetchNews = defineStore('fetchNews', () =>{
    const state = reactive({
        news: [],
        image: null,
        totalItems: 0
    })

    function newsGet(){
        return new Promise((resolve, reject) =>{
            client.get('/getNewsThree')
                .then((res) =>{
                    console.log("Yangilik olindi")
                    state.news = res.data['hydra:member']
                    resolve()
                } )
                .catch(() =>{
                    console.log("Yangilik Olishda xatolik")
                    reject()
                })
        })
    }
    function allNewsGet(currentPage = 1){
        return new Promise((resolve, reject) =>{
            client.get('/getAllNews?page=' + currentPage)
                .then((res) =>{
                    console.log("Yangilik olindi")
                    state.news = res.data['hydra:member'] 
                    state.totalItems = res.data['hydra:totalItems']
                    resolve()
                } )
                .catch(() =>{
                    console.log("Yangilik Olishda xatolik")
                    reject()
                })
        })
    }
    function allNewsGetById(id){
        return new Promise((resolve, reject) =>{
            client.get('/new_pages/' + id)
                .then((res) =>{
                    console.log("Yangilik olindi")
                    state.allById = res.data
                    resolve()
                } )
                .catch(() =>{
                    console.log("Yangilik Olishda xatolik")
                    reject()
                })
        })
    }

    return {newsGet, allNewsGet, state, allNewsGetById}
})