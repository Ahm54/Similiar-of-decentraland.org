<template>
    <TopBar />
    <div class="kapsayici">
        <div class="topbar">
            <a class="a" href="./allarticles">All Articles</a>
            <a class="a" href="./announcements">Announcements</a>
            <a class="a" href="./platform">Platform</a>
            <a class="a" href="./projectupdate">Project Updates</a>
            <a class="a" href="./technology">Technology</a>
            <a class="a" href="./tutorials">Tutorials</a>
            <input type="text" class="inp" placeholder="search..." />
        </div>
        <div class="main-card">
            <div class="card-img">
                <img src="../assets/photo-2.jpeg" class="main-img" alt="photo-1">
            </div>
            <div class="yazi">
                <h4 class="h4">OCT 06, 2023</h4>
                <p class="p">COMMUNITY PROJECTS</p>
                <h2 class="h2">Soul Magic: A<br>Bewitching P2E RPG<br>in Decentraland</h2>
                <p class="card-p">
                    Discover how Soul Magic, a role-playing game<br>leveraged Decentraland’s community support<br>and a DAO
                    grant to become one of the<br>metaverse’s most popular scenes.</p>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <img src="../assets/photo-3.jpg" class="img-1" alt="Foto-1">
                <p class="p-2">Sep 27, 2023</p>
                <p class="p-3">ANNOUNCEMENTS</p>
                <h3 class="h3">Expression in Decentraland gets an <br> Upgrade: Emotes 2.0 are Live</h3>
            </div>
            <div class="card">
                <img src="../assets/photo-3.jpg" class="img-1" alt="Foto-1">
                <p class="p-2">Sep 27, 2023</p>
                <p class="p-3">ANNOUNCEMENTS</p>
                <h3 class="h3">Expression in Decentraland gets an <br> Upgrade: Emotes 2.0 are Live</h3>
            </div>
            <div class="card">
                <img src="../assets/photo-3.jpg" class="img-1" alt="Foto-1">
                <p class="p-2">Sep 27, 2023</p>
                <p class="p-3">ANNOUNCEMENTS</p>
                <h3 class="h3">Expression in Decentraland gets an <br> Upgrade: Emotes 2.0 are Live</h3>
            </div>
            <div class="card" v-if="loadMore.click">
                <img src="../assets/photo-3.jpg" class="img-1" alt="Foto-1">
                <p class="p-2">Sep 27, 2023</p>
                <p class="p-3">ANNOUNCEMENTS</p>
                <h3 class="h3">Expression in Decentraland gets an <br> Upgrade: Emotes 2.0 are Live</h3>
            </div>
            <div class="card" v-if="loadMore.click">
                <img src="../assets/photo-3.jpg" class="img-1" alt="Foto-1">
                <p class="p-2">Sep 27, 2023</p>
                <p class="p-3">ANNOUNCEMENTS</p>
                <h3 class="h3">Expression in Decentraland gets an <br> Upgrade: Emotes 2.0 are Live</h3>
            </div>
            <div class="card" v-if="loadMore.click">
                <img src="../assets/photo-3.jpg" class="img-1" alt="Foto-1">
                <p class="p-2">Sep 27, 2023</p>
                <p class="p-3">ANNOUNCEMENTS</p>
                <h3 class="h3">Expression in Decentraland gets an <br> Upgrade: Emotes 2.0 are Live</h3>
            </div>
        </div>
        <button class="loadBtn" @click="loadMore">LOAD MORE</button>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default {
    data() {
        return {
            cardToShow: 3,
            totalCards: 9
        };
    },
    methods: {
        loadMore() {
        }
    },
    components: { TopBar }
}
</script>

<style scoped>

.kapsayici{
    background-color: rgb(10,10,30);
}
.main-card {
    display: flex;
    flex-direction: row;
    background-color: rgb(10,10,30);
    margin-bottom: 150px;
    margin-top: 0;
    align-items: center;
    justify-content: center;
}

.a {
    color: white;
    font-size: 18px;
    margin: 10px;
    font-weight: 300;
    padding-left: 5px;
    text-decoration: none;
}

.cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}

.topbar {
    height: 60px;
    width: 100%;
    background-color: rgb(10,10,30);
    justify-content: space-between;
    text-align: right;
    margin-bottom: 30px;
}

.card-img {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loadBtn{
    background-color: darkgrey;
    height: 30px;
    width: 140px;
    color:white;
    border:1px solid black;
    border-radius: 4px; 
    margin-bottom:30px;
    
}
.inp {
    width: 350px;
    text-align: left;
    height: 30px;
    padding-right: 100px;
    margin: 10px;
    padding-top: 5px;
}

.img-1 {
    width: 100%;
    height: 150px;
    transition: transform 0.5s;
    border:1px solid rgba(10,10,30);
    border-radius: 10px 10px 0 0;
}

.img-1:hover {
    transform: translateY(-10px);
}

.main-img {
    margin-bottom: 0;
    width: 150%;
    height: 325px;
    transition: transform 0.5s;
}

.main-img:hover {
    transform: translateY(-10px);
}

.card {
    height: 300px;
    width: 400px;
    background-color: black;
    margin: 10px;
    border: 1px solid white;
    border-radius: 10px;
}

.yazi {
    text-align: left;
    margin: 20px;
    padding-left: 100px;
}

.h4 {
    color: white;
}

.h3 {
    color: white;
}

.p-3 {
    color: gray;
}

.h2 {
    color: white;
}

.p {
    color: gray;
}

.card-p {
    color: white;
}

.p-2 {
    color: white;
}</style>