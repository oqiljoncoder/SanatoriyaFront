import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";


export const useAddFile =
    defineStore('addFile', () => {
    const state = reactive({
        id: ''
    })
        let i = ref(0)
        const router = useRouter()
    function addFile(file) {
        return new Promise((resolve, reject) => {
            client.post('/media_objects', file)
                .then((res) => {
                    console.log("File Qo'shildi")
                    state.id = res.data['@id']
                    resolve()
                })
                .catch(() => {
                    console.log("File Qo'shishda xatolik")
                    i.value++;
                    if (i.value>3){
                        router.push('/login')
                    }
                    reject()
                })
        })
    }

    return {addFile, state}
})