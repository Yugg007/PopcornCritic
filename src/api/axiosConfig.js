import axios from 'axios';

export default axios.create({
    baseURL:'http://34.93.17.127',
    headers: {"ngrok-skip-browser-warning": "true"},
    responseType:'json'
});
