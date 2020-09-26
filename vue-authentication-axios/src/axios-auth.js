import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
})

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default instance;