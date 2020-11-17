import apiConfigs from "../configs/api.configs";
import axios from 'axios'

export default {
    methods: {
        getLatestMovies(page) {
           return axios({
                method:'GET',
                url:`${apiConfigs.apiUrl}movie/popular`,
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