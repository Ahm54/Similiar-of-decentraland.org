<template>
    <TopBar />
    <BuilderTopBar />
    <div class="home">
        <h1 class="h1">Get Started</h1>
        <img class="img" src="@/assets/logox.jpg" alt="logo">
        <p class="p">You can use the <a href="https://metamask.io" class="a"> MetaTask</a> extension or your email account</p>
        <button class="btn" @click="$router.push('./signIn')">CONNECT</button>
    </div>
    <div class="footer">
        <a href="./" class="footer-a">Home</a>
        <a href="./privacy" class="footer-a">Privacy Policy</a>
        <a href="./termofuse" class="footer-a">Terms of Use</a>
        <a href="./contentpolicy" class="footer-a">Content Policy</a>
        <a href="./codeofethics" class="footer-a">Code of Ethics</a>
    </div>
</template>

<script>
import BuilderTopBar from '../components/BuilderTopBar.vue';
import TopBar from '../components/TopBar.vue';

export default{
    components: { TopBar, BuilderTopBar }
}
</script>

<style scoped>
.home{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: black;
    height: 750px;
    width: 100%;
}
.h1{
    text-align: center;
    color:white;
    font-size: 40px;
    margin-top: 90px;
}
.img{
    border:1px solid darkgray;
    border-radius: 50%;
    height: 150px;
    width: 150px;
}
.p{
    color:gray;
    text-align: center;
}
.a{
    color:red;
}
.btn{
    color:white;
    background-color: chocolate;
    text-align: center;
    border:1px solid darkgray;
    border-radius: 5px;
    height: 30px;
    width: 120px;
    margin-top:60px;
}
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: black;
}
.footer-a{
    text-decoration: none;
    color:gray;
}
</style>