<template>
    <div class="main">
        <TopBar />
        <div class="secondTopBar">
            <a href="#" class="a">Overview</a>
            <a href="#" class="a">Collectibles</a>
            <a href="#" class="a">Land</a>
            <a href="#" class="a">My Assets</a>
            <a href="#" class="a">My List</a>
            <button class="btn-default">BUY MANA</button>
        </div>
        <div class="Card">
            <img src="../assets/dec2.jpg" alt="foto" class="img">
            <p class="p">The Wings Alpha</p>
            <div class="buttons">
                <button class="btn-default">LEGENDARY</button>
                <button class="btn-default">HAT</button>
                <button class="btn-default">UNISEX</button>
            </div>
            <span class="desc">DESCRIPTION</span>
            <p class="p-2">Spottie Wifi x TRAX collab</p>
            <div class="div1">
                <span class="spn">Creator</span>
                <img src="../assets/dec6.jpeg" alt="resim" class="resim">
                <p class="card-p">CJTRAX</p>
            </div>
            <div class="div2">
                <span class="spn">COLLECTION</span>
                <img src="../assets/dec4.jpeg" alt="resim" class="resim2">
                <p class="card-p2">TRAX x Spottie Wifi collab</p>
            </div>
            <div class="info">
                <p class="info-p">Buy directly from the creator <i class=""></i></p>
                <span class="info-span">PRICE <i class=""></i></span>
                <p class="info-p2"><i class=""></i>15 ($ 6.09)</p>
                <button class="btn-default"><i class=""></i>BUY WITH MANA</button>
                <button class="btn-default"><i class=""></i>BUY WITH CARD</button>
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

<style scoped></style>