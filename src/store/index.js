import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let favoriteList = window.localStorage.getItem('wishlist');

export default new Vuex.Store({
  state: {
    favoriteList: favoriteList ? JSON.parse(favoriteList) : [],

  },
  getters: {
    getTotalFavorite: (state) => {
        return state.favoriteList.length;
    }
}
})
