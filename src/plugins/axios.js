import axios from "axios";
import Vue from 'vue'
import { ENVIROMENT } from '../utils'

const devInstance = createInstance(ENVIROMENT.apiUrl)

function createInstance(baseURL){
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `
        }
    })
}

export default {
    install () {
        Vue.prototype.$http = devInstance
    }
};