import axios from "axios";
import Vue from 'vue'
import { ENVIROMENT } from '../utils'
import { store } from '../store';

const devInstance = createInstance(ENVIROMENT.apiUrl)

function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Authorization': `Bearer ${store.getters.getToken}`,
        }
    })
}

export default {
    install () {
        Vue.prototype.$http = devInstance
    }
};