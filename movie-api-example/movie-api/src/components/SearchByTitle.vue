<template>
  <div id="app"> 
    <div class="searchByTitle" >
    <div> 
        
    <input placeholder="movie title" v-model="searchMovieTitle" class="pholder"/>
    <button @click="getMovieById" class="button1"> Search Movie By Title</button>
    <button @click="goFav" class="button2"> Favourites</button>
    
    <table >
        <tr>
            <th>Movie Title</th>
            <th>Movie Year</th>
            <th>Poster</th>
            <th>Add</th>
        </tr>
        <tr v-for = "(i,index) in this.$store.state.searchRes.Search"  :key="index">
            <td>{{i.Title}}</td>
            <td>{{i.Year}}</td>
            <td>
                <img :src="i.Poster" class="imgPoster"/>
            </td>
            <td>
                <button @click="setFavourite(i)" >+</button>
            </td>
        </tr>
    </table>
     
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'searchByTitle',
    data(){
        return{
            searchMovieTitle: "",
            movieId:[]
        }
    },
    methods:{
        getMovieById(){
            this.$http.get(`https://www.omdbapi.com/?s=${this.searchMovieTitle}&apikey=bcdfc3d1`)
            .then((res) =>{
                //console.log(res)
                this.$store.commit('setSearchRes',res.data)
            });
            
            
        },
        setFavourite(i){
            //console.log(i)
            
             
            console.log(this.movieId)
            if( this.movieId.length == 0){
                this.movieId.push(i.imdbID)
                this.$store.commit('setfavouriteMovies',i)
            } else{
                this.movieId.push(i.imdbID)
                for (let id in this.movieId) {
                if(i.imdbID == this.movieId[id])
                console.log("already exists") 
                else {
                    this.$store.commit('setfavouriteMovies',i)   
                }             
                
            }
            }
            
            
            
            

        },
        goFav(){
            this.$router.push('/favourites')
        }

    } 

}
</script>

<style scoped>
.searchByTitle{
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
    width: 100%;
    margin-top: 10px;
}
th,td{
    padding:10px;
}
tr:nth-child(even){background-color: #f2f2f2}
th {
  background-color: #04AA6D;
  color: white;
}
.pholder{
  background-color:rgb(226, 218, 212) ;
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
    
    
    