<template>
    <TopBar />
    <div class="topbar">
        <a class="a" href="./allarticles">All Articles</a>
        <a class="a" href="./announcements">Announcements</a>
        <a class="a" href="./platform">Platform</a>
        <a class="a" href="./projectupdate">Project Updates</a>
        <a class="a" href="./technology">Technology</a>
        <a class="a" href="./tutorials">Tutorials</a>
        <input type="text" class="inp" placeholder="search..." />
    </div>
    <div class="main">
        <h2 class="h2">Tutorials</h2>
        <p class="p">Learn how to use our developer tools to build 3D content, games, and apps for Decentraland.</p>
    </div>
    <div class="card">
        <p class="card-p">March 11, 2021</p>
        <h4 class="card-h4">Atari Game Jam winners</h4>
        <img class="img" src="../assets/photo-1.jpg" alt="Photo1">
    </div>
    <hr>
    <div class="card">
        <p class="card-p">February 10, 2021</p>
        <h4 class="card-h4">Expression in Decentraland gets an Upgrade: Emotes 2.0 are live</h4>
        <img class="img" src="../assets/photo-2.jpeg" alt="Photo1">
    </div>
    <hr>
    <div class="card">
        <p class="card-p">February 02, 2021</p>
        <h4 class="card-h4">Game Jam returns for 2021</h4>
        <img class="img" src="../assets/photo-3.jpg" alt="Photo1">
    </div>
    <hr>
    <div class="card">
        <p class="card-p">January 28, 2021</p>
        <h4 class="card-h4">New builder Contest: CyberPunk 2021</h4>
        <img class="img" src="../assets/photo.jpeg" alt="Photo1">
    </div>
    <hr>
    <div class="card">
        <p class="card-p">May 14, 2019</p>
        <h4 class="card-h4">Decentraland Avatars FAQ</h4>
        <img class="img" src="../assets/photox.jpeg" alt="Photo1">
    </div>
    <hr>
    <div class="card">
        <p class="card-p">March 26, 2019</p>
        <h4 class="card-h4">Decentraland Creator Contest Highlights</h4>
        <img class="img" src="../assets/photo-1.jpg" alt="Photo1">
    </div>
    <br>
    <br>
    <button class="btn">Load More</button>
    <br>
    <div class="footer">
        <p class="footer-p">Home</p>
        <p class="footer-p">Privacy Policy</p>
        <p class="footer-p">Terms of Use</p>
        <p class="footer-p">Content Policy</p>
        <p class="footer-p">Code of Ethics</p>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default {
    components: { TopBar }
}
</script>
<style scoped>
.main {
    background-image: url('../assets/photo-2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
}
.topbar {
    height: 60px;
    width: 100%;
    background-color: black;
    justify-content: space-between;
    text-align: right;
    margin-bottom: 30px;
}
.h2 {
    padding-left: 60px;
    text-align: left;
    color: white;
}
.a {
    color: white;
    font-size: 18px;
    margin: 10px;
    font-weight: 300;
    padding-left: 5px;
    text-decoration: none;
}
.p {
    color: white;
    text-align: left;
    padding-left: 60px;
}
.inp{
    width: 350px;
    text-align: left;
    height: 30px;
    padding-right: 100px;
    margin:10px;
    padding-top: 5px;
}
.card {
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    background-color: black;
    justify-content: space-between;
}

.card-p {
    color: white;
    text-align: left;
    margin:30px;
}

.card-h4 {
    color: white;
    font-weight: 700;
    margin: 10px;
    text-align: center;
}

.img {
    border: 1px solid white;
    border-radius: 4px;
    width: 140px;
    height: 100px;
    text-align: right;
    align-items: right;
    margin-right: 20px;
}

.footer {
    display: flex;
    justify-content: space-between;
    margin: 10px;
}</style>
