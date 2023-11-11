<template>
    <div class="kapsayici">
        <div class="home">
            <button @click="$router.push('./marketplace')" class="btn">Market Place</button>
            <button @click="$router.push('./builderapp')" class="btn">Builder</button>
            <button @click="$router.push('./docsapp')" class="btn">Docs</button>
            <button @click="$router.push('./placesapp')" class="btn">Places</button>
            <button @click="$router.push('./eventsapp')" class="btn">Events</button>
            <button @click="$router.push('./daoapp')" class="btn">DAO</button>
            <button @click="$router.push('./blogapp')" class="btn">Blog</button>
            <button @click="$router.push('./aboutus')" class="btn">About Us</button>
        </div>
        <div class="paragraf" style="height: 200px;width: 100%;">
            <h1 class="h1" style="color:black;font-size: 40px;">Decetraland Documentation</h1>
            <p style="color:gray;text-align: center;">The first-ever virtual world owned by its users</p>
            <input type="text" class="inp" placeholder="Search..." />
        </div>
        <div class="cards">
            <div class="card-1">
                <h4 class="h4"><i class="fas fa-plane"></i> For Players</h4>
                <p class="card-p">Discover how to experience Decentraland and get the most out of it</p>
                <a href="#" class="card-a">VIEW MORE ></a>
            </div>
            <div class="card-2">
                <h4 class="h4"><i class="fas fa-edit"></i>For Content Creators</h4>
                <p class="card-p">Learn how to create content for others to experience in Decentraland</p>
                <a href="#" class="card-a">VIEW MORE ></a>
            </div>
            <div class="card-3">
                <h4 class="h4"><i class="fas fa-code"></i> For Contributors</h4>
                <p class="card-p">Learn how you can contribute to building the tools and infrastructure of Decentraland.</p>
                <a href="#" class="card-a">VIEW MORE ></a>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.kapsayici{
    background-color: white;
    width: 100%;
    height: 100%;
}
.home {
    background-color: black;
    margin-top: 0;
    width: 100%;
    margin-bottom: 20px;
    height: 100px;
}

.main {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;
}

.card-1 {
    background-color: deeppink;
    border: 3px solid white;
    border-radius: 6px;
    padding: 10px;
    height: 280px;
    width: 350px;
    transition: transform 0.5s ease;
}

.card-1:hover {
    transform: translateY(-5px);
}

.btn {
    color: black;
    height: 40px;
    background-color: white;
    border: 1px solid white;
    border-radius: 3px;
    font-size: larger;
}

.card-2 {
    background-color: blue;
    border: 3px solid white;
    border-radius: 6px;
    background-color: blueviolet;
    height: 300px;
    width: 350px;
    transition: transform 0.5s ease;
}

.card-2:hover {
    transform: translateY(-5px);
}

.card-3 {
    border: 3px solid white;
    border-radius: 6px;
    background-color: orange;
    width: 350px;
    height: 300px;
    transition: transform 0.5s ease;
}

.card-3:hover {
    transform: translateY(-5px);
}

.card-a {
    color: beige;
}

.h4 {
    color: aquamarine;
}

.card-p {
    color: antiquewhite;
}

.inp {
    width: 400px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 15px;
    font-size: large;
    margin-right: 50px;
}

.p1 {
    color: gray;
    font-size: large;
    text-align: left;
    align-items: center;
    display: flex;
    justify-content: center;
}

.p {
    color: gray;
    font-size: large;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 500px;
}</style>