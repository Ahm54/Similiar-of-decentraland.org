<template>
    <TopBar />
    <BuilderTopBar />
    <div class="main">
        <h1 class="h1">Get Started</h1>
        <i class="fas fa-book-dead"
            style="font-size: 60px; color:white; background-color: gray;border:1px solid gray; border-radius: 50%;"></i>
        <p class="p">You need to <a href="#" @click="showCard" class="a">Sign in</a> to access this page</p>
        <div class="cards" v-if="isCardVisible">
            <h4 class="h4">Sign In</h4>
            <p class="card-p">Choose how you want to connect to Ethereum</p>
            <div class="card"><i class="fas fa-dragon" style="font-size: 50px;float: left; margin:10px;"></i>
                <h3 class="card-h3">MetaMask</h3>
                <p class="card-p">Using the MetaMask App</p>
            </div>
            <div class="card">
                <i class="fab fa-btc" style="font-size: 50px;float:left;margin:10px;"></i>
                <h3 class="card-h3">Fortmatic</h3>
                <p class="card-p">Using your email</p>
            </div>
            <div class="card">
                <i class="far fa-money-bill-alt" style="font-size: 50px;float: left;margin: 10px;"></i>
                <h3 class="card-h3">WalletConnect</h3>
                <p class=card-p>Using a mobile wallet</p>
            </div>
            <div class="card">
                <i class="fas fa-money-check-alt" style="font-size: 50px; float:left;margin:10px;"></i>
                <h3 class="card-h3">Coinbase Wallet</h3>
                <p class="card-p">Using your mobile or browser extension</p>
            </div>
            <div class="footer-card">
                <p class="footer-p">
                    Trezor and smart contract wallets like Dapper, Argent or Gnosis safe, do not <br> work with
                    Polygon. Read more about the Trezor support status <a href="#" class="footer-a">here</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import BuilderTopBar from './BuilderTopBar.vue';
import TopBar from './TopBar.vue';

export default {
    data() {
        return {
            isCardVisible: false
        };
    },
    methods: {
        showCard() {
            this.isCardVisible = !this.isCardVisible;
        }
    },
    components: { TopBar, BuilderTopBar }
}
</script>

<style scoped>
.main {
    height: 100vh;
    width: 100%;
    /* background-color: darkgray; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.cards {
    align-items: center;
    justify-content: center;
    height: 750px;
    width: 500px;
    background-color: blue;
    display: flex;
    flex-direction: column;
}

.card {
    background-color: blue;
    height: 120px;
    width: 350px;
}

.card-h3 {
    color: white;
    margin: 10px;
    text-align: left;
    margin-left: 20px;
}

.card-p {
    color: darkgray;
    text-align: center;
    text-align: left;
    margin-left: 30px;
}

.p {
    color: gray;
    text-align: center;
}

.h4 {
    color: white;
}
.h1{
    color:white;
    font-size:40px;
}
.a {
    color: red;
    text-decoration: none;
}
</style>