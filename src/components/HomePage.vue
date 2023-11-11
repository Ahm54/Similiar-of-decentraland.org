<template>
    <div class="kapsayici">
        <TopBar />
        <div class="main">
            <Swiper :options="swiperOption1" :modules="modules" navigation :pagination="{ clickable: true }">
                <SwiperSlide class="swiper1">
                    <div class="swiper1">
                        <div class="video-container">
                            <video class="video" autoplay muted loop>
                                <source src="../assets/video.mp4" type="video/mp4">
                            </video>
                            <h1 style="color:white; font-size: 40px; margin-top:60px;margin-left: 100px;text-align: left;">
                                DECENTRALAND</h1>
                            <p style="color:white;margin-left: 100px; text-align: left;">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. Obcaecati, officiis.</p>
                            <div class="buttons">
                                <button class="btn1"><i class="fas fa-bookmark" style="float:left"></i> JUMP IN VIA BROWSER
                                    <br>
                                    LIMITED EXPERIENCE</button>
                                <button class="btn2"><img src="../assets/indir.jpeg" alt="img"
                                        style="height: 20px; width: 20px; border-radius:50%; float: left;"> DOWNLOAD <br>
                                    BEST
                                    PERFORMANCE</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <video class="video" autoplay muted loop>
                        <source src="../assets/dark-video.mp4" type="video/mp4">
                    </video>
                    <div class="buttons">
                        <h1 style="color:white; font-size: 40px; margin-top:60px;margin-left: 100px;text-align: left;">
                            DECENTRALAND</h1>
                        <p style="color:white;margin-left: 100px; text-align: left;">Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Obcaecati, officiis.</p>
                        <button class="btn1"><i class="fas fa-bookmark" style="float:left"></i> JUMP IN VIA BROWSER <br>
                            LIMITED
                            EXPERIENCE</button>
                        <button class="btn2"><img src="../assets/indir.jpeg" alt="img"
                                style="height: 20px; width: 20px; border-radius:50%; float: left;"> DOWNLOAD <br> BEST
                            PERFORMANCE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <video class="video" autoplay muted loop>
                        <source src="../assets/video-1.mp4" type="video/mp4">
                    </video>
                    <h1 style="color:white; font-size: 40px; margin-top:60px;margin-left: 100px;text-align: left;">
                        DECENTRALAND
                    </h1>
                    <p style="color:white;margin-left: 100px; text-align: left;">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Obcaecati, officiis.</p>
                    <div class="buttons">
                        <button class="btn1"><i class="fas fa-bookmark" style="float:left"></i> JUMP IN VIA BROWSER <br>
                            LIMITED
                            EXPERIENCE</button>
                        <button class="btn2"><img src="../assets/indir.jpeg" alt="img"
                                style="height: 20px; width: 20px; border-radius:50%; float: left;"> DOWNLOAD <br> BEST
                            PERFORMANCE</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="container col-12">
            <h3 style="display: flex;margin-left: 50px;text-align: left;color:white;">In Decentraland</h3>
            <Swiper :options="swiperOption2" :modules="modules" navigation :slides-per-view="2"
                :pagination="{ clickable: true }">
                <SwiperSlide style="width: 400px; margin-bottom: 40px;">
                    <div class="card1">
                        <p style="color:white;margin-left:10px;font-size: 20px; text-align: left; margin-left: 40px;">Long
                            Road</p>
                        <p style="color:darkgray;text-align: left; margin-left: 40px;">By <span
                                style="text-align: left; margin-left: 40px;color:white;margin-left:10px;">stateless</span>
                        </p>
                        <button class="btn btn-info">JUMP IN</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card2">
                        <p
                            style="color:white;margin-right:10px;font-size: 20px; margin-left: 40px; text-align: left;margin-right: 1100px;">
                            Long Road</p>
                        <p style="color:darkgray;text-align: left; margin-left: 40px;">By <span
                                style="text-align: left; margin-left: 40px;color:white;margin-left:10px;">stateless</span>
                        </p>
                        <button class="jumpIn">JUMP IN</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card3">
                        <p style="color:white;margin-left:10px;font-size: 20px; text-align: left;margin-left: 40px;">Long
                            Road</p>
                        <p style="color:darkgray;text-align: left; margin-left: 40px;">By <span
                                style="text-align: left; margin-left: 40px;color:white;">stateless</span>
                        </p>
                        <button class="jumpIn">JUMP IN</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <h1 class="h1" style="text-align: left;color:white; margin-left:50px;">What's News</h1>
        <div class="Cards">
            <div class="card">
                <img src="../assets/photo-1.jpg" alt="image" class="img-card">
                <p class="p-card">ANNOUNCEMENTS <span class="card-span">OCT 17,2023</span></p>
                <h3 class="h3-card">The Ultimate Guide to the AI World <br> Fair</h3>
            </div>
            <div class="card">
                <img src="../assets/photox.jpeg" alt="image" class="img-card">
                <p class="p-card">ANNOUNCEMENTS <span class="card-span">OCT 17,2023</span></p>
                <h3 class="h3-card">The Ultimate Guide to the AI World <br> Fair</h3>
            </div>
            <div class="card">
                <img src="../assets/photo-3.jpg" alt="image" class="img-card">
                <p class="p-card">ANNOUNCEMENTS <span class="card-span">OCT 17,2023</span></p>
                <h3 class="h3-card">The Ultimate Guide to the AI World <br> Fair</h3>
            </div>
            <div class="card">
                <img src="../assets/photo-2.jpeg" alt="image" class="img-card">
                <p class="p-card">ANNOUNCEMENTS <span class="card-span">OCT 17,2023</span></p>
                <h3 class="h3-card">The Ultimate Guide to the AI World <br> Fair</h3>
            </div>
        </div>
    </div>
    <div style="height: 20px; margin:0;padding: 0;background-color: black;"></div>
    <WeatherAppVue />
    <MapApp />
</template>


<script>
import { defineComponent } from 'vue'
import { Navigation } from 'swiper/modules'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TopBar from './TopBar.vue'
import WeatherAppVue from './WeatherApp.vue'
import MapApp from './MapApp.vue'

export default defineComponent({
    name: 'swiper-example-navigation',
    title: 'Navigation',
    url: import.meta.url,
    components: {
        Swiper,
        SwiperSlide,
        TopBar,
        WeatherAppVue,
        MapApp
    }, data() {
        return {
            swiperOption2: {
                slidesPerView: 2,
                spaceBetween: 20,
                autoplay: {
                    delay: 3000
                }
            }
        }
    },
    setup() {
        return {
            modules: [Navigation, Pagination]
        }
    }
})
</script>


<style scoped>
.kapsayici {
    background-color: black;
    width:100%;
    height: auto;
}

.big{
    background-color: black;
}
.btn-signin {
    color: white;
    background-color: deeppink;
    height: 30px;
    width: 140px;
    float: right;
    align-items: self-end;
    justify-content: right;
    margin-top: 10px;
}

.swiper {
    position: relative;
    width: 100%;
}
.btnbtn{
    height: 50px;
    width: 250px;
    background-color: white;
    color:black;
    border:1px solid transparent;
    border-radius: 5px;
    float:left;
    margin-left: 150px;
    margin:10px;
}
.btnbtn2{
    height: 50px;
    width: 250px;
    background-color:black;
    color:white;
    border:2px solid white;
    margin:10px;
    border-radius: 5px;
    float:left;
}
.main-2 {
    margin-bottom: 40px;
}

.home {
    height: 60px;
}

.card1 {
    background-image: url('../assets/photo-1.jpg');
    height: 220px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 10px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 30px;
}

.card2 {
    background-image: url('../assets/photo-3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 220px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 30px;
}

.card3 {
    background-image: url('../assets/photo-2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 220px;
    border: 1px solid white;
    border-radius: 5px;
    margin: 30px;
}

.Cards {
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: black;
}

.card {
    margin-top: 10px;
    width: 320px;
    border: 1px solid black;
    border-radius: 8px;
    height: 400px;
    background-color: black;
}

.imgdiv {
    color: white;
    font-size: 50px;
    text-align: center;
    padding-top: 300px;
}

.img-card {
    height: 200px;
    width: 250px;
    border: 1px solid black;
    border-radius: 8px;
    margin-right: 15px;
    transition: transform 1s;
}

.img-card:hover {
    transform: translateY(-5px);
}

.imgxx {
    background-image: url('../assets/dec1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;
}

.p-card {
    color: white;
    font-size: 16px;
}

.card-span {
    color: gray;
}

.h3-card {
    color: white;
}

.swiper1 {
    height: 500px;
}

.buttons {
    padding-bottom: 30px;
}

.home {
    align-items: left;
    margin-right: 400px;
}

.card-img {
    height: 110px;
    width: 200px;
    border: 1px solid black;
    border-radius: 5px;
}

.jumpIn {
    background-color: deeppink;
    color: white;
    float: right;
    margin-right: 40px;
    margin-top: 75px;
}

.btn1 {
    text-align: left;
    margin-top: 300px;
    height: 60px;
    width: 250px;
    background-color: deeppink;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    margin-right: 5px;
}

.btn2 {
    text-align: left;
    margin-top: 300px;
    height: 60px;
    width: 250px;
    background-color: transparent;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
}

.swiper video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    z-index: -1;
    object-fit: cover;
}

.btn {
    position: relative;
    /* display:block; */
    height: 25px;
    width: 12 0px;
    margin: 10px 7px;
    padding: 5px 5px;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 2px;
    color: #383736;
    border: 2px #383736 solid;
    border-radius: 4px;
    text-transform: uppercase;
    outline: 0;
    overflow: hidden;
    background: none;
    z-index: 1;
    cursor: pointer;
    transition: 0.08s ease-in;
    -o-transition: 0.08s ease-in;
    -ms-transition: 0.08s ease-in;
    -moz-transition: 0.08s ease-in;
    -webkit-transition: 0.08s ease-in;
}

.btn:hover {
    color: whitesmoke;
}

.btn:before {
    content: "";
    position: absolute;
    background: #383736;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.09s ease-in;
}

.btn:hover:before {
    top: 0;
}

.img {
    float: left;
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    border: 1px solid white;
    border-radius: 50%;
}</style>