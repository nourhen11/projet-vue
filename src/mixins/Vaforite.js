export default {
    methods: {
        addToFavorite(movie) {
            console.log("jdjvdjfhbj")
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
        removeFromFavorite(){

        },
        getFavorites(){
            let list = JSON.parse(localStorage.getItem('wishlist'));
            return list;
        }
    
    }
}