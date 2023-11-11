<template>
    <TopBar />
    <div class="main">
        <a href="./overview" class="a">Overview</a>
        <a href="" class="a">Genesis City</a>
        <a href="" class="a">Worlds</a>
        <a href="" class="a">FAQ</a>
        <input type="text" class="inp" placeholder="Search Genesis City and Worlds" />
    </div>
   
</template>

<script>


import TopBar from './TopBar.vue';

export default {
    components: {
        TopBar,

    }
}
</script>

<style scoped>
.main {
    background-color: white;
    height: 30px;
    margin-top: 10px;
    width: 100%;
    text-align: left;
    margin-left: 30px;
    margin-bottom: 30px;
}
.swiper{
    height: 600px;
    width: 100%;
}
.a {
    color: black;
    font-size: large;
    padding-right: 10px;
    padding-left: 10px;
    text-decoration: none;
}

.inp {
    border: 1px solid gray;
    border-radius: 15px;
    height: 30px;
    width: 300px;
    padding-right: 10px;
    padding-left: auto;
    margin-left: 400px;
}
</style>