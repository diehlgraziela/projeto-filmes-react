import axios from 'axios';

//base = https://api.themoviedb.org/3/
//api url = https://api.themoviedb.org/3/movie/now_playing?api_key=2a9aaec413a0b1c711b1aa6b96d008ad&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export default api;