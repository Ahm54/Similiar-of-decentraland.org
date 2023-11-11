<template>
    <div class="kapsayici">
        <TopBar />
        <div class="main">
            <div class="main-1">
                <h1 class="h1">MarketPlace Volume</h1>
                <p class="p">Includes Land, Wearables, Emotes and Names</p>
            </div>
            <div class="main-2">
                <button class="btn1">7 Days</button>
                <button class="btn1">30 Days</button>
                <button class="btn1">ALL</button>
            </div>
        </div>
        <div class="total">
            <div class="totalsales">
                <p class="p">Total Sales</p>
                <h3 class="tot-h3">647 <p class="total-p">92/day</p>
                </h3>
            </div>
            <div class="totalsales">
                <p class="p">Total Volume</p>
                <h3 class="tot-h3">35.46K <p class="total-p">$9.98K</p>
                </h3>
            </div>
            <div class="totalsales">
                <p class="p">Dao Revenue</p>
                <h3 class="tot-h3">19.52K <p class="total-p">$5.41K</p>
                </h3>
            </div>
        </div>
        <div class="home1">
            <h2 class="h2">Trending Items</h2>
            <p class="p">Bestselling Items over the last 24hs</p>
        </div>
        <div class="cards">
            <div class="card">
                <img src="../assets/photo-1.jpg" alt="photo-1" class="img1" />
                <h5 class="h5">ryandg trippy hands</h5>
                <p class="card-p">Saus</p>
                <h2 class="card-h2">10</h2>
                <button class="card-btn1">UNCOMMON</button>
            </div>
            <div class="card">
                <img src="../assets/photo-2.jpeg" alt="photo-2" class="img1" />
                <h5 class="h5">Royal Babes Regal Wave</h5>
                <p class="card-p">EmpressRaeon</p>
                <h2 class="card-h2">299</h2>
                <button class="card-btn2">LEGENDARY</button>
            </div>
            <div class="card">
                <img src="../assets/photo-3.jpg" alt="photo-3" class="img1" />
                <h5 class="h5">Dj Cat</h5>
                <p class="card-p">MonsterHall</p>
                <h2 class="card-h2">20</h2>
                <button class="card-btn3">EPIC</button>
            </div>
            <div class="card">
                <img src="../assets/photox.jpeg" alt="photo-4" class="img1" />
                <h5 class="h5">Metafox Egytipian God</h5>
                <p class="card-p">MetafoxCrew</p>
                <h2 class="card-h2">15</h2>
                <button class="card-btn4">MYTHIC</button>
            </div>
            <div class="card">
                <img src="../assets/photoxx.jpeg" alt="photo-5" class="img1" />
                <h5 class="h5">PurrFlex</h5>
                <p class="card-p">DappCat</p>
                <h2 class="card-h2">100</h2>
                <button class="card-btn5">EPIC</button>
            </div>
        </div>
        <div class="items">
            <h1 class="h1">Newest Items</h1>
        </div>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';
import './styles/overViewStyle.css';



export default {
    components: { TopBar }
}
</script>

