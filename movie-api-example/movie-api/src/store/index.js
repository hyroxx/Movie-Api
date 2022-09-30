import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        searchRes:[],
        favouriteMovies:[],
        imdbID: null,
        myReviewsAndVotes: [],
    },
    mutations:{
        setSearchRes(state,payload){
            state.searchRes = payload
        },
        setfavouriteMovies(state,payload){
            state.favouriteMovies.unshift(payload)
    },
        deleteFavouriteMovie(state,value){
            state.favouriteMovies.splice(value,1)
        },
        setImdbID(state,payload){
            state.imdbID=payload
    },
        setmyReviewsAndVotes(state,payload){
            state.myReviewsAndVotes.unshift(payload)
    },
        deleteImdbID(state){
            state.imdbID=null
    },
    deleteMyReviewAndVote(state,value){
        state. myReviewsAndVotes.splice(value,1)
    },
    }
})

