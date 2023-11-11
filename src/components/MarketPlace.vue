<template>
    <div class="mainDiv" style="background-color: black;">
        <div class="kapsayici">
            <TopBar />
            <div class="main" style="margin-bottom:20px;height: 100px;">
                <div class=""
                    style="display: flex; flex-direction: row;margin-left: 100px;padding-left: 20px;width: 100%; height: 20px;justify-content: space-evenly;">
                    <a href="./overview" @click="$router.push('./marketplace')"
                        style="padding-left: 20px;margin-top: 20px;text-decoration: none;color:white;">Overview</a>
                    <a href="./collectibles" @click="$router.push('./collectibles')"
                        style="margin-top: 20px;text-decoration: none; color:white;padding-left: 20px;">Collectibles</a>
                    <a href="#" class=""
                        style="margin-top: 20px;text-decoration: none;color:white;padding-left: 20px;">Land</a>
                    <a href="#" class="" style="margin-top: 20px;width: 150px;text-decoration: none; color:white;">My
                        Assets</a>
                    <a href="#" class="" style="margin-top: 20px;color:white;width: 150px;text-decoration: none;">My
                        Lists</a>
                    <div class="" style="float: right;padding-left: 600px;">
                        <button class="" style="float:right;height: 30px;width: 150px;margin-right: 30px;background-color: black;color:white;border:1px solid white;margin-top: 10px;border-radius: 4px;">Buy
                            Mana</button>
                    </div>
                </div>
                <hr style="background-color: black;">
            </div>
            <div class="" style="height: 100px; width: 100%;margin-top:30px;margin-bottom: 30px;">
                <h1 class="" style="text-align: left;margin-left: 40px;color:white;">Marketplace Volume</h1>
                <p class="" style="text-align: left; font-size: 25px;margin-left: 40px;">Includes Land, Wearables, Emotes
                    and Names</p>
            </div>
            <div class="totalsales"
                style="height: 120px;border:1px solidd black;border-radius: 5px;width: 90%;background-color: darkgray; display: flex; flex-direction: row;justify-content: space-evenly;">
                <div class="total1" style="width:150px">
                    <i class="fas fa-chart-line" style="color:white;float:left;font-size: 40px;margin-top: 10px;"></i>
                    <p class="totalv">TOTAL SALES <i class=""></i></p>
                    <div class="kapsa" style="display: flex;flex-direction: row;">
                        <span style="text-align: center;color:white;margin-left: 5px;">623</span>
                        <p class="total-p1" style="text-align: center;color:gray;margin-left: 10px;">
                            89/day</p>
                    </div>
                </div>
                <div class="total2" style="width: 180px;">
                    <i class="fas fa-industry" style="font-size: 40px;color:white;float:left;margin-top: 10px;"></i>
                    <p color:gray>TOTAL VOLUME <i class=""></i></p>
                    <div class="kapsa" style="display: flex;flex-direction: row;">
                        <span style="color:white;margin-left: 5px;">52.31K</span>
                        <p style="color:gray;margin-left: 10px;">$22.45K</p>
                    </div>
                </div>
                <div class="total3" style="width: 180px;">
                    <i class="fas fa-balance-scale" style="font-size: 40px;color:white;float: left;margin-top: 10px;"></i>
                    <p style="padding-left: 20px; text-align: left;">DAO REVENUE <i class=""></i></p>
                    <div class="kapsa" style="display: flex;flex-direction: row;">
                        <span style="text-align: center;padding-left: 20px;color:white;">9.81K </span>
                        <p style="color:gray;margin-left: 20px;">$4.14K</p>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 100%;background-color: black;margin-top:75px;">
            <h3 style="margin-left: 50px;color:white;text-align: left;">Trending Items</h3>
            <p style="color:gray;margin-left: 50px;text-align: left;">Bestselling Items over the last 24hs <i class=""></i>
            </p>
        </div>
        <div class="cards" style="width: 100%;height: 400px;background-color: black;">
            <div class="card1" style="height: 300px;width: 350px;">
                <img src="../assets/dec14.jpeg" alt="foto"
                    style="border:1px solid black;border-radius: 4px;height: 200px;width: 200px;">
                <p style="margin-left:55px;color:white;text-align: left;">The Wings Alpha</p>
                <p style="color:gray;margin-left: 55px;text-align: left;">CJTRAX</p>
                <i class="far fa-clipboard" style="float:left;margin-left: 50px;font-size: 30px;color:white;"></i>
                <h2 style="text-align: left;color:white;margin-left: 75px;">15</h2>
                <button
                    style="width: 140px;height: 30px;background-color: purple;border:1px solid black;border-radius: 4px;color:white">LEGENDARY</button>
            </div>
            <div class="card1" style="height: 300px;width: 350px;">
                <img src="../assets/dec14.jpeg" alt="foto"
                    style="border:1px solid black;border-radius: 4px;height: 200px;width: 200px;">
                <p style="margin-left:55px;color:white;text-align: left;">The Wings Alpha</p>
                <p style="color:gray;margin-left: 55px;text-align: left;">CJTRAX</p>
                <i class="far fa-clipboard" style="float:left;margin-left: 50px;font-size: 30px;color:white;"></i>
                <h2 style="text-align: left;color:white;margin-left: 75px;">15</h2>
                <button
                    style="width: 140px;height: 30px;background-color: purple;border:1px solid black;border-radius: 4px;color:white">LEGENDARY</button>
            </div>
            <div class="card1" style="height: 300px;width: 350px;">
                <img src="../assets/dec14.jpeg" alt="foto"
                    style="border:1px solid black;border-radius: 4px;height: 200px;width: 200px;">
                <p style="margin-left:55px;color:white;text-align: left;">The Wings Alpha</p>
                <p style="color:gray;margin-left: 55px;text-align: left;">CJTRAX</p>
                <i class="far fa-clipboard" style="float:left;margin-left: 50px;font-size: 30px;color:white;"></i>
                <h2 style="text-align: left;color:white;margin-left: 75px;">15</h2>
                <button
                    style="width: 140px;height: 30px;background-color: purple;border:1px solid black;border-radius: 4px;color:white">LEGENDARY</button>
            </div>
            <div class="card1" style="height: 300px;width: 350px;">
                <img src="../assets/dec14.jpeg" alt="foto"
                    style="border:1px solid black;border-radius: 4px;height: 200px;width: 200px;">
                <p style="margin-left:55px;color:white;text-align: left;">The Wings Alpha</p>
                <p style="color:gray;margin-left: 55px;text-align: left;">CJTRAX</p>
                <i class="far fa-clipboard" style="float:left;margin-left: 50px;font-size: 30px;color:white;"></i>
                <h2 style="text-align: left;color:white;margin-left: 75px;">15</h2>
                <button
                    style="width: 140px;height: 30px;background-color: purple;border:1px solid black;border-radius: 4px;color:white">LEGENDARY</button>
            </div>
            <div class="card1" style="height: 300px;width: 350px;">
                <img src="../assets/dec14.jpeg" alt="foto"
                    style="border:1px solid black;size: cover;border-radius: 4px;height: 200px;width: 200px;">
                <p style="margin-left:55px;color:white;text-align: left;">The Wings Alpha</p>
                <p style="color:gray;margin-left: 55px;text-align: left;">CJTRAX</p>
                <i class="far fa-clipboard" style="float:left;margin-left: 50px;font-size: 30px;color:white;"></i>
                <h2 style="text-align: left;color:white;margin-left: 75px;">15</h2>
                <button
                    style="width: 140px;height: 30px;background-color: purple;border:1px solid black;border-radius: 4px;color:white">LEGENDARY</button>
            </div>
        </div>
    </div>
</template>

<script>

import TopBar from './TopBar.vue';

export default {
    components: {
        TopBar
    },
    methods: {
        mpOverview() {
            this.$router.push('./marketplace')
        },
        gotoCollectibles() {
            this.$router.push('./collectibles')
        }
    }
}
</script>

<style scoped>.kapsayici {
    background-color: black;
}</style>