<template>
  <div>
    <div class="favouriteMoviesClass"> 
        <h3>My Favourite Movies</h3>
        <table>
            <tr>
                <th>Movie Title</th>
                <th>Movie Year</th> 
                <th>Poster</th>
                <th>Delete</th>
                <th>Details</th>
            </tr>
            <tr v-for = "(i,index) in this.$store.state.favouriteMovies"  :key="index">
                <td>{{i.Title}}</td>
                <td>{{i.Year}}</td>
                <td>
                    <img :src="i.Poster" class="imgPoster"/>
                </td>
                <td>
                    <button @click="deleteFav(index)">-</button>
                </td>
                <td>
                    <button @click="details(i.imdbID)">Details</button>
                </td> 
            </tr>
        </table>
        <div>  
            <button @click="goSearch" class="button1">Search</button>
            <button @click="goReview" class="button2">Review</button>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    methods:{
        deleteFav(index){
            this.$store.commit('deleteFavouriteMovie',index)
        },
        goSearch(){
            this.$router.push('/search')
        },
        details(id){
            this.$store.commit('setImdbID',id);
            this.$router.push('/details')
        },
        goReview(){
            this.$router.push('/review')
        }
    }

}
</script>

<style scoped>
    .favouriteMoviesClass{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    .imgPoster{
        width:120px;
        height:auto;
    }
    table,th,td{
        border:2px solid brown;
        border-collapse: collapse;
        width: 50%;
        margin-top: 10px;
    }
    th,td{
        padding:10px;
    }
    tr:nth-child(even){background-color: #f2f2f2}
    .button1 {
        background-color: chocolate;
        border: 1px darkgreen;
        border-radius: 12px;
        color: white; 
        padding: 10px 10px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin: 4px 2px;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
    .button1:hover {opacity: 1}
    .button2 {
    background-color: darkgreen;
    border: 1px chocolate;
    border-radius: 12px;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
.button2:hover {opacity: 1}
    </style> 
    <h2> Animated Button - Fade in Effect </h2>
    
    <button class="button1">Search</button>
    <button class="button2">Review</button>