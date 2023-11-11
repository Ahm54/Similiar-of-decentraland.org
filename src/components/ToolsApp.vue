<template>
    <TopBar />
    <div>
        <button class="btn">Overview</button>
        <button class="btn">Collectibles</button>
        <button class="btn">Land</button>
        <button class="btn">My Assets</button>
        <button class="btn">My Lists</button>
    </div>
    <div class="alt">
        <h1 class="h1">MarketPlace Volume</h1>
        <p class="p">Includes Land, Wearables, Emotes and Names</p>
    </div>
    <div class="days">
        <button class="btn-day">7 DAYS</button>
        <button class="btn-day">30 DAYS</button>
        <button class="btn-day">ALL</button>
    </div>
    <div class="home">
        <div class="total">
            <p class="p2">Total Sales</p>
            <p class="p3">563 80/day</p>
        </div>
        <div>
            <p class="p3">Total Volume</p>
            <p class="p4">92.89k $27.63k</p>
        </div>
        <div>
            <p class="p3">Dao Revenue</p>
            <p class="p4">9.91k $2.95k</p>
        </div>
    </div>
    <h1 class="h1">Trending Items</h1>
    <p class="p">Bestselling Items over the last 24hs</p>
    <div class="cards">
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
    </div>
    <h2 class="item-h1">Newest Item</h2>
    <div class="two-buttons">
        <button class="btn-item">Wearables</button>
        <button class="btn-item">Emotes</button>
    </div>
    <div class="cards-2">
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
        <div class="card">
            <img class="card-img" src="" alt="Photo">
            <h6 class="card-h6">Bufalo Rodeo Hat</h6>
            <p class="card-p">15</p>
            <button class="card-btn">Legendary</button>
        </div>
    </div>
    <div class="rank-main">
        <h1 class="rank-h1">Rankings</h1>
        <p class="rank-p">Includes only wearable and Emotes</p>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default{
    components:{
        TopBar
    }
}
</script>

<style scoped>
.home {
    width: 100%;
    height: 50px;
}

.cards {
    display: flex;
    flex-direction: row;
}

.btn {
    color: white;
    background-color: black;
    font-size: large;
}

.btn:active {
    text-decoration: overline solid crimson;
}
</style>