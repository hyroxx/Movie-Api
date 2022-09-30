<template>
  <div class="detailsPage">

    <div class="imgRow"> 
        <img :src="detailsMovie.data.Poster" class ="imgPoster"/><br>
    </div>
    
    <div class="infoRow"> 
        <button @click="goSearch" class="button2"> Go Search</button>
        <h2>{{detailsMovie.data.Title}}</h2> 
        <span>Year : {{detailsMovie.data.Year}}</span> <br>
        <span>Relased : {{detailsMovie.data.Relased}}</span> <br>
        <span>Director : {{detailsMovie.data.Director}}</span> <br>
        <span>Writer : {{detailsMovie.data.Writer}}</span><br>
        <span>Actors : {{detailsMovie.data.Actors}}</span>
        <p>Plot : {{detailsMovie.data.Plot}}</p>
        <span>Country : {{detailsMovie.data.Country}}</span><br>
        <span>Awards : {{detailsMovie.data.Awards}}</span><br>
        <span>imdbRating : {{detailsMovie.data.imdbRating}}</span><br>
        <span>imdbVotes : {{detailsMovie.data.imdbVotes}}</span><br>
        <span>DVD : {{detailsMovie.data.DVD}}</span><br>
        <input placeholder=" Vote (max: 10)" v-model="myvote" class="pholder"/><br>
        <textarea v-model="review"  class="reviewClass"></textarea><br>
        <button @click="addReview" class="button1">Add Review And Vote</button>
    </div>

  </div>
</template>

<script>
export default {
    name : 'MovieDetails', 
    data(){
        return{
            detailsMovie: [],
            review:'',
            myvote: null
        }

    },
    created:function(){ 
    this.$http.get(`http://www.omdbapi.com/?i=${this.$store.state.imdbID}&apikey=bcdfc3d1`)
        .then((res) =>{
           //console.log(res)
            this.detailsMovie = res
        });
    },
    methods:{
        addReview(){
            if(this.$store.state.imdbID !== null){
                const data ={
                id: this.$store.state.imdbID,
                title: this.detailsMovie.data.Title,
                poster: this.detailsMovie.data.Poster,
                review: this.review,
                myvote: this.myvote
            }
            this.$store.commit('setmyReviewsAndVotes',data );
            this.$router.push('/favourites')
            } else {
                alert("ID null ....")
            }
        },
        goSearch(){
            this.$store.commit('deleteImdbID');
            this.detailsMovie , this.myvote = null;
            this.review = ''
            this.$router.push('/search')
        }
    }
}
</script>

<style scoped>
.imgPoster{
        width:auto;
        height:auto;
    }
    .detailsPage{
        display:flex;
        flex-direction: row;
    }
    .imgRow{
        display:flex;
        justify-content: center;
        width: 40%;
        padding-top: 20px;
    }
    .infoRow{
        width: 60%;

    }
    .reviewClass{
        background-color:rgb(226, 218, 212) ;
        border: 1px darkgreen;  
        border-radius: 12px;
        color: black; 
        padding: 10px 10px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px; 
        margin: 4px 2px;
        cursor: pointer; 
        width:80%;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); 
        
        
    }
    .pholder{
        background-color:rgb(226, 218, 212) ;
        border: 1px darkgreen;  
        border-radius: 12px;
        color: black; 
        padding: 10px 10px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px; 
        margin: 4px 2px;
        cursor: pointer; 
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); 
        }
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
        margin-top: 30px;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
.button2:hover {opacity: 1}
</style>
<h2> Animated Button - Fade in Effect </h2>
    
    <button class="button1">Search Movie By Title</button>
    <button class="button2">Favourites</button>