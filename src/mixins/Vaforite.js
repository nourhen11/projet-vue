export default {
    methods: {
        addToFavorite(movie) {
               let list = JSON.parse(localStorage.getItem('wishlist')) || [];
               let movieObject = {
                   id: movie.id,
                   poster_path: movie.url,
               }
                 let indexOfExistingMovie = list.findIndex(
                   (el) => el.id === movieObject.id
               );
            
               if(indexOfExistingMovie == -1) {
                   list.push(movieObject)
               }
               
               localStorage.setItem('wishlist', JSON.stringify(list));
        },
    
        getFavorites(){
            let list = JSON.parse(localStorage.getItem('wishlist'));
            return list;
        },
    
        removeFavorite(id){
            let list = JSON.parse(localStorage.getItem('wishlist'));
            const filteredlist = list.filter((item) => {
                return item.id !== id
            })
            localStorage.setItem('wishlist', JSON.stringify(filteredlist));
        },
        checkIdMovie(id){
            let list = JSON.parse(localStorage.getItem('wishlist'));
            let indexOfExistingMovie = list.findIndex(
                (el) => el.id === id
            );
         
            if(indexOfExistingMovie !== -1) {
                return true
            }
            return false
        }
    
    }
}