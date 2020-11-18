import axios from 'axios'
import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getRequestToken(){
            return axios({
                method:'GET',
                url:`${apiConfigs.apiUrl}authentication/token/new`,
                params:{
                    api_key:apiConfigs.apiKey,
                }

            })
        },
        validateRequestToken(username,password,request_token){
            return axios({
                method:'POST',
                url:`${apiConfigs.apiUrl}authentication/token/validate_with_login`,
                params:{
                    api_key:apiConfigs.apiKey,
                },
                data:{
                    username,
                    password,
                    request_token
                }
           })
        }

}
}