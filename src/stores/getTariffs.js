import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchTariffs = defineStore('fetchTariffs', () =>{
    const state = reactive({
        tariff: [],
        totalItems: 0
    })

    function tariffsGet(){
        return new Promise((resolve, reject) =>{
            client.get('tariffs')
                .then((res) =>{
                    console.log("Tarif yuklab olindi")
                    state.tariff = res.data
                    resolve()
                } )
                .catch(() =>{
                    console.log("Tarif yuklab  Olishda xatolik")
                    reject()
                })
        })
    }

    return {tariffsGet, state}
})