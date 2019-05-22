import axios from 'axios'

axios.defaults.withCredentials = true

/* eslint-disable */
export default {
    getAllCategories () {   
        return axios.get('/api/category', {})
        .then(response => {
            console.log(response.data, "categories");
            return response.data
        }, error => {
            return error.response.data.err
        })
    }
}