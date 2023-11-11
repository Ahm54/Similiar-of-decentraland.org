<template>
    <PlacesTopBar />
    <div class="main">
        <Swiper class="swiper-container" style="width: 90%;" :options="swiperOptions" navigation>
            <SwiperSlide>
                <div class="card-1">
                    <h1 class="card-h1">Genesis Plaza</h1>
                    <p class="card-p">Jump in to strike up a chat with other visitors, retake the commands tutorial with a cute
                        floating <br> robot, or dive into the swirling portal to get to Decentrand's visitor center</p>
                    <div class="buttons">
                        <button class="btn1">JUMP IN</button>
                        <button class="btn2">FIND OUT MORE</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="card-2">
                    <h1 class="card-h1">ICE Poker - The Stronghold</h1>
                    <p class="card-p">Play Decentraland Games ICE Poker in our stronghold</p>
                    <div class="buttons">
                        <button class="btn1">JUMP IN</button>
                        <button class="btn2">FIND OUT MORE</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <div class="card">
        <h1 class="cards-h1">Most Active</h1>
        <div class="cards2">
            <div class="card1">
                <img src="../assets/photo.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
            <div class="card1">
                <img src="../assets/photo.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
            <div class="card1">
                <img src="../assets/photo.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
            <div class="card1">
                <img src="../assets/photo.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
        </div>
    </div>
    <div class="featured">
        <h1 class="cards-h1">Featured</h1>
        <div class="cards2">
            <div class="card1">
                <img src="../assets/photo-1.jpg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
            <div class="card1">
                <img src="../assets/photox.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
            <div class="card1">
                <img src="../assets/photoxx.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
            <div class="card1">
                <img src="../assets/photo.jpeg" alt="image" class="img1">
                <h4 class="cards-h4">ICE Poker - The Stronghold</h4>
                <p class="p1">Decentral Games</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import PlacesTopBar from './PlacesTopBar.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        PlacesTopBar,
    },
    data() {
        return {
            swiperOptions: {
                autoplay:{
                    delay:3000
                }
            },
        };
    },
};
</script>


<style scoped>
.main{
    background-color: white;
    width: 100%;
}
.card{
    background-color: white;
    width: 100%;
}
.cards2{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 10px;
    width:100%;
    align-items: center;
}
.cards-h4{
    margin-left: 5px;
    text-align: left;
}
.cards-h1{
    text-align: left;
    margin-left: 80px;
}
.card1{
    height: 280px;
    width: 240px;
    border:1px solid black;
    border-radius: 5px;
}
.img1{
    height: 150px;
    width: 240px;
    border:1px solid white;
    border-radius: 5px;
}
.p1{
    color:gray;
    text-align: left;
    margin-left: 5px;
}
.card-1{
    background-image: url('../assets/photo-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
}
.card-2{
    background-image: url('../assets/photo-3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
}
.buttons{
    position: relative;
    bottom: 10px;
    left: 10px;
    z-index: 1;
    margin-top: 200px;
}
.card-h1{
    padding-top:30px;
}
.btn1{
    color:white;
    background-color: deeppink;
    height: 40px;
    width: 180px;
    text-align: center;
    border:1px solid white;
    border-radius: 5px;
    margin-right: 20px;
    z-index: 1;
}
.btn2{
    color:black;
    background-color: white;
    height: 40px;
    width: 180px;
    text-align: center;
    border:1px solid white;
    border-radius: 5px;
    margin-left: 20px;
    z-index: 1;
}
.card-h1{
    color:white;
    text-align: left;
    margin-left:100px;
    margin-top:20px;
}
.card-p{
    color:white;
    text-align: left;
    margin-left: 100px;
}
</style>