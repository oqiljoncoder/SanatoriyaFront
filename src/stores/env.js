
import {defineStore} from "pinia";

export const useEnv = defineStore('env', () => {
    const url = 'YOUR_URL';

    return {url: url}
})
