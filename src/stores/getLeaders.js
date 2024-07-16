import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";


export const useFetchLeader = defineStore('fetchLeader', () =>{
    const state = reactive({
        leaders: [],
        name: '',
        description: '',
        text: ''
    })

    function leaderGet(){
        return new Promise((resolve, reject) =>{
            client.get('/leaderships')
                .then((res) =>{
                    console.log("Kattalar olindi")
                    state.leaders = res.data['hydra:member']
                    resolve()
                } )
                .catch(() =>{
                    console.log("Kattalar olishda xatolik")
                    reject()
                })
        })
    }

    return {leaderGet, state}
})