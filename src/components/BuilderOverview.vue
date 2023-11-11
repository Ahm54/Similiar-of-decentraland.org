<template>
    <TopBar />
    <div class="topbar">
        <a class="a" href="./builderoverview">Overview</a>
        <a class="a" href="./buildercollection">Collections</a>
        <a class="a" href="./builderscenes">Scenes</a>
        <a class="a" href="#">Land</a>
        <a class="a" href="#">Names</a>
        <a class="a" href="#">Worlds</a>
    </div>
    <hr>
    <div class="meta">
        <h1 class="h1">Let's build the Metaverse together!</h1>
        <div class="cards">
            <div class="card">
                <h3 class="card-h3">Collections</h3>
                <p class="card-p">Create, review and publish your<br>collections of Wearables and<br> Emotes</p>
                <img class="img" src="@/assets/photo-1.jpg" alt="Foto-1">
                <button class="btn-1">MANAGE COLLECTIONS</button>
                <button class="btn-2">LEARN MORE</button>
            </div>
            <div class="card">
                <h3 class="card-h3">Scenes</h3>
                <p class="card-p">Build your space in your LAND. You <br> can use free 3D models or upload <br> your own.
                </p>
                <img class="img" src="@/assets//photo-2.jpeg" alt="Foto-1">
                <button class="btn-1">BUILD SCENES</button>
                <button class="btn-2">LEARN MORE</button>
            </div>
            <div class="card">
                <h3 class="card-h3">Land</h3>
                <p class="card-p">Publish Scenes, create Estates and <br> manage permissions of your LAND.</p>
                <br>
                <img class="img" src="@/assets//photo-3.jpg" alt="Foto-1">
                <button class="btn-1">MANAGE YOUR LAND</button>
                <button class="btn-2">LEARN MORE</button>
            </div>
            <div class="card">
                <h3 class="card-h3">Names</h3>
                <p class="card-p">Claim your unique name and assign <br> it to your avatar or your parcels</p>
                <br>
                <img class="img" src="@/assets//photox.jpeg" alt="Foto-1">
                <button class="btn-1">CLAIM NAME</button>
                <button class="btn-2">LEARN MORE</button>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default {
    components: { TopBar }
}
</script>

<style scoped>
.meta{
    background-color: black;
}
.topbar {
    display: flex;
    flex-direction: row;
    text-align: left;
    padding-left: 10px;
    justify-content: space-between;
    background-color: gray;
    height: 50px;
    align-items: center;
    padding-right: 800px;
}

.a {
    text-decoration: none;
    color: white;
}

.h1 {
    text-align: center;
    font-size: 24px;
    color: white;
    margin: 20px;
    padding-top: 15px;
}

.cards {
    background-color: black;
    display: flex;
    flex-direction: row;
    margin: 20px;
    align-items: center;
    justify-content: space-between;
    height: 600px;
}

.card {
    background-color: gray;
    display: flex;
    flex-direction: column;
    margin: 5px;
    height: 500px;
    width: 320px;
    margin-bottom:10px;
    border:1px solid darkgray;
    border-radius:5px;
}

.card-h3 {
    color: white;
    margin: 10px;
    text-align: center;
}

.card-p {
    color: darkgray;
    text-align: center;
}

.img {
    height: 190px;
    width: 100%;
}

.btn-1 {
    color: white;
    background-color: chocolate;
    text-align: center;
    border: 1px solid darkgray;
    border-radius: 4px;
    width: 200px;
    height: 40px;
    margin-top: 80px;
margin-left: 60px;
}

.btn-2 {
    color: chocolate;
    text-align: center;
    width: 200px;
    background-color: gray;
    margin-left: 60px;
    margin-top:10px;
    height: 40px;
   margin-top:40px;
   margin-bottom:10px;
}</style>