import apiConfigs from "../configs/api.configs";
import axios from 'axios'

export default {
    methods: {
        getSearchMovies(query){
            return axios({
                method:'GET',
                url:`${apiConfigs.apiUrl}search/movie`,
                params:{
                    api_key:apiConfigs.apiKey,
                    query:query,
                    language:'en-US'
                }

            })
        },
        getLatestMovies(page) {
           return axios({
                method:'GET',
                url:`${apiConfigs.apiUrl}movie/now_playing`,
                params:{
                    api_key:apiConfigs.apiKey,
                    page:page,
                    language:'en-US'
                }

            })
        },
        getDetailsMovie(id){
            return fetch(`${apiConfigs.apiUrl}movie/${id}?api_key=${apiConfigs.apiKey}`)
            .then(res => res.json())
        },
        getUpcomingMovies(page){
            return axios({
                method:'GET',
                url:`${apiConfigs.apiUrl}movie/upcoming`,
                params:{
                    api_key:apiConfigs.apiKey,
                    page:page,
                    language:'en-US'
                }

            })
        }
    
    }
}