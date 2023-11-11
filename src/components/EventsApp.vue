<template>
    <div class="kapsa">
        <TopBar />
        <div class="anadiv">
            <Swiper class="swiper" :modules="modules" navigation>
                <SwiperSlide class="slide">
                    <div class="main">
                        <img src="../assets/photo-1.jpg" class="img" alt="foto">
                        <div class="swiper-info">
                            <h1 class="swiper-h1"><i class="fas fa-calendar-alt"
                                    style="float:left;color:white;margin-left: 5px;margin-right: 20px; "></i>
                                Decentraland Games' FREE Play <br> Casino Night w/ Crypto <br> Prizes</h1>
                            <p class="swiper-p">Public, Organized by <span class="swiper-span2">Murphjestic</span></p>
                            <button class="swiper-btn"><i class="far fa-star"></i>Interested</button>
                            <button class="swiper-ikon"><i class="fas fa-project-diagram"></i></button>
                            <div style="clear: both;"></div>
                            <hr>
                            <div style="display: flex;justify-content: space-evenly; height: 80px;">
                                <i class="far fa-clock"
                                    style="color:white;float: left;padding-left: 0; font-size: 25px;"></i>
                                <p class="swiper-p2">Starts in 3 days</p>
                                <span class="swiper-span2"><i class="fas fa-calendar-alt"></i> Add To Calendar</span>
                            </div>
                            <hr>
                            <div style="display: flex;align-items: center;height: 40px;">
                                <i class="fas fa-map-marker-alt"
                                    style="padding-left: 10px;margin-top:7px; font-size: 20px;color:white; float:left;"></i>
                                <p class="swiper-p3">Tominoya</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="slide">
                    <div class="main">
                        <img src="../assets/photo-1.jpg" class="img" alt="foto">
                        <div class="swiper-info">
                            <h1 class="swiper-h1"><i class="fas fa-calendar-alt"
                                    style="float:left;color:white;margin-left: 5px;margin-right: 20px; "></i>
                                All World Fair, October 25-27 <br> 2023</h1>
                            <p class="swiper-p">Public, Organized by <span class="swiper-span2">Juzzy#6111</span></p>
                            <button class="swiper-btn"><i class="far fa-star"></i>Interested</button>
                            <button class="swiper-ikon"><i class="fas fa-project-diagram"></i></button>
                            <div style="clear: both;"></div>
                            <hr>
                            <div style="display: flex;justify-content: space-evenly; height: 80px;">
                                <i class="far fa-clock"
                                    style="color:white;float: left;padding-left: 0; font-size: 25px;"></i>
                                <p class="swiper-p2">Starts in 8 days</p>
                                <span class="swiper-span2"><i class="fas fa-calendar-alt"></i> Add To Calendar</span>
                            </div>
                            <hr>
                            <div style="display: flex;align-items: center;height: 40px;">
                                <i class="fas fa-map-marker-alt"
                                    style="padding-left: 10px;margin-top:7px;color:white; font-size: 20px; float:left;"></i>
                                <p class="swiper-p3">Decentraland University</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="slide">
                    <div class="main">
                        <img src="../assets/photo-1.jpg" class="img" alt="foto">
                        <div class="swiper-info">
                            <h1 class="swiper-h1"><i class="fas fa-calendar-alt"
                                    style="float:left;color:white;margin-left: 5px;margin-right: 20px; "></i>
                                BOTV Holders' Rodeo - <br>Grand Quiz @ Bufalo Saloon <br> - Wearable, Music NFTs</h1>
                            <p class="swiper-p">Public, Organized by<span class="swiper-span2"> Bufalo</span></p>
                            <button class="swiper-btn"><i class="far fa-star"></i>Interested</button>
                            <button class="swiper-ikon"><i class="fas fa-project-diagram"></i></button>
                            <div style="clear: both;"></div>
                            <hr>
                            <div style="display: flex;justify-content: space-evenly; height: 80px;">
                                <i class="far fa-clock"
                                    style="color:white;float: left;padding-left: 0; font-size: 25px;"></i>
                                <p class="swiper-p2">Starts in 6 days</p>
                                <span class="swiper-span2"><i class="fas fa-calendar-alt"></i> Add To Calendar</span>
                            </div>
                            <hr>
                            <div style="display: flex;align-items: center;height: 40px;">
                                <i class="fas fa-map-marker-alt"
                                    style="color:white;padding-left: 10px;margin-top:7px; font-size: 20px; float:left;"></i>
                                <p class="swiper-p3">Bufalo Saloon</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    <div class="kapsayici-2">
        <h3 class="main-h3">TRENDING</h3>
        <div class="home">
            <div class="cards">
                <div class="card">
                    <img src="../assets/photo.jpeg" alt="image" class="card-img">
                    <p class="trend-p">OCTOBER 19</p>
                    <h2 class="card-h2">Movie Night at Cyberlove</h2>
                </div>
                <div class="card">
                    <img src="../assets/photo-2.jpeg" alt="image" class="card-img">
                    <p class="trend-p">OCTOBER 24</p>
                    <h2 class="card-h2">MoFyah Monday Warm-up <br> Show with ShelleyVan</h2>
                </div>
                <div class="card">
                    <img src="../assets/photo-3.jpg" alt="image" class="card-img">
                    <p class="trend-p">OCTOBER 25</p>
                    <h2 class="card-h2">AI World Fair, October 25-27 <br> 2023</h2>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import TopBar from './TopBar.vue'

export default defineComponent({
    name: 'swiper-example-navigation',
    title: 'Navigation',
    url: import.meta.url,
    components: {
        Swiper,
        SwiperSlide,
        TopBar
    },
    setup() {
        return {
            modules: [Navigation]
        }
    }
})
</script>

<style scoped>
.kapsa {
    background-color: black;
    width: 100%;
    height: 100%;
}
.kapsayici{
    height: 100%;
    width: 100%;
    margin: 0;
}
.main {
    display: flex;
    flex-direction: row;
    height: 500px;
}

.swiper-info {
    height: 300px;
    align-items: left;
    margin-left: 0;
}

.swiper-h1 {
    color: white;
    text-align: left;
}

.anadiv {
    background-color: white;
    margin-top:30px;
}

.swiper-h1 {
    text-align: left;
}

.main-h3 {
    color: gray;
    text-align: left;
    margin-left: 50px;
    margin-top:40px;

}

.home {
    margin-top: 100px;
}

.swiper-p {
    color: gray;
    font-size: 15px;
}

.swiper-p2 {
    color: gray;
    font-size: 15px;
    text-align: left;
    margin-right: 80px;
    margin-bottom: 160px;
}

.card-h2 {
    text-align: left;
}

.swiper-p3 {
    text-align: left;
    padding-left: 30px;
    padding-top: 1px;
    color: deeppink;
}

.cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.trend-p {
    color: gray;
    text-align: left;
}

.card {
    transition: transform 1s;
    background-color: azure;
    width: 450px;
    height: 120px;
    border: 1px solid white;
    border-radius: 5px;
}

.card:hover {
    transform: translateY(-5px);
}

.card-img {
    height: 120px;
    width: 120px;
    border: 1px solid white;
    border-radius: 5px;
    float: left;
}

.swiper-span {
    color: chocolate;
}

.swiper-span2 {
    color: deeppink;
    font-size: 20px;
    text-align: center;
}

.img {
    width: 550px;
    height: 500px;
    float: left;
    margin-left: 30px;
    margin-top: 0;
    object-fit: cover;
    border: none;
    border-radius: 0;
    margin-right: 0;
    padding-right: 0;
}

.swiper-btn {
    height: 50px;
    width: 350px;
    border: 1px solid black;
    border-radius: 6px;
    color: black;
    background-color: white;
}

.swiper-ikon {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    border-radius: 6px;
    color: chocolate;
    background-color: white;
    margin: 10px;
}</style>