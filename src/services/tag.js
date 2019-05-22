import axios from 'axios'

axios.defaults.withCredentials = true

/* eslint-disable */
export default {
    getAllTags () {   
        return axios.get('/api/tags', {})
        .then(response => {
            console.log(response, "tags");
            return response.data
        }, error => {
            console.log(error, "err");
            return error.response.data.err
        })
    }
}