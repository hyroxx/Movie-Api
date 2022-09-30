<template>
  <div>
    <div v-for ="(i,index) in this.$store.state.myReviewsAndVotes" :key = "index" class="reviewLoop"> 
        <div class = "movieArea"> 
            <h3>{{i.title}}</h3>
            <img :src="i.poster" class="imgPoster"/>
        </div>
        <div class="reviewArea"> 
            <div class="votes"> VOTE : <span class="vote" >{{i.myvote}}</span> </div>
            <span class="review">{{i.review}}</span>
        </div>
        <button @click="deleteReview(index)" class="button3">Delete Review</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ReviewPage',
    methods:{
        deleteReview(index){
            this.$store.commit('deleteMyReviewAndVote',index)
        }
    }

}
</script>

<style scoped>
    .imgPoster{
        width:200px;
        height:auto;
    }
    .button3 {
        background-color: darkgreen;
        border: 1px chocolate;
        border-radius: 12px;
        color: white; 
        padding: 10px 10px; 
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 12px;
        margin-top: 80px;
        margin-left: 20px;
        width: 10%;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.3s;
        
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
    .button3:hover {opacity: 1}
    .reviewLoop{
        display:flex;
        flex-direction: row;
    }
    .movieArea{
        display: flex;
        flex-direction: column;
        width: 150px;   
        text-align: center;
    }
    .reviewArea{
        display: flex;
        flex-direction: column;
        width: 60%;
        margin-top: 80px;
        margin-left: 80px;
        padding: 5px;
        background-color:rgb(226, 218, 212) ;
        border-radius: 10px;
        -webkit-box-shadow: 20px 10px 20px 10px rgba(107,102,107,0.47);
        -moz-box-shadow: 20px 10px 20px 10px rgba(107,102,107,0.47);
        box-shadow: 20px 10px 20px 10px rgba(107,102,107,0.47);

    }
    .vote{
        background-color:rgb(226, 218, 212) ;
        color: black; 
        padding: 10px; 
        text-align: left;
        text-decoration: none;
        display: inline-block;
        font-size: 20px; 
        margin: 4px;
        
    }
    
    .review{
        background-color:rgb(226, 218, 212) ;
        color: black; 
        padding: 10px; 
        text-align: left;
        text-decoration: none;
        display: inline-block;
        font-size: 20px; 
        margin: 4px;
        
    }
</style>