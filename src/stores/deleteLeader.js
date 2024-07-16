import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useDeleteLeader = defineStore('deleteLeader', () => {
    function leaderDelete(id) {
        return new Promise((resolve, reject) => {
            client.delete('/leaderships/' + id)
                .then(() => {
                    console.log("Katta ishdan ketti")
                    resolve()
                })
                .catch(() => {
                    console.log("Kattalar olishda xatolik")
                    reject()
                })
        })
    }

    return {leaderDelete}
})