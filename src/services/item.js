import axios from 'axios'

axios.defaults.withCredentials = true

/* eslint-disable */
export default {
    getAllItems () {   
        return axios.get('/api/item', {})
        .then(response => {
            console.log(response, "items");
            return response.data
        }, error => {
            console.log(error, "err");
            return error.response.data.err
        })
    }
}