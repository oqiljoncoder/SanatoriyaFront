
import {defineStore} from "pinia";

export const useEnv = defineStore('env', () => {
    const url = 'https://api.sangardaksanatoriy.uz';

    return {url: url}
})