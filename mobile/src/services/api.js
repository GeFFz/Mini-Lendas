import axios from 'axios';

const api = axios.create ({
    baseURL: 'http://192.168.0.107:3333'
});
//se o endereço localhost:3333 não funcionar vc da um ifconfig no terminal e pegue seu ip para substituir ex: 192.168.0.100:3333
export default api;