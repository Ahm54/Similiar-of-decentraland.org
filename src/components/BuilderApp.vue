<template>
    <div class="kapsa">
        <TopBar />
        <BuilderTopBar />
        <h1 class="h1" style="text-align: center;margin-top: 40px;">Let's build the Metaverse together!</h1>
        <div class="main">
            <div class="cards">
                <div class="card">
                    <h3 class="h3">Collections</h3>
                    <p class="p">Create, review and publish your <br> collections of Wearables and <br> Emotes.</p>
                    <img class="img" src="../assets/photo.jpeg" alt="Photo">
                    <button class="btn-1">Manage Collections</button>
                    <button class="btn-2">Learn More</button>
                </div>
                <div class="card">
                    <h3 class="h3">Scenes</h3>
                    <p class="p">Create, review and publish your <br> collections of Wearables and <br> Emotes.</p>
                    <img class="img" src="../assets/photo-2.jpeg" alt="Photo">
                    <button class="btn-1">Manage Collections</button>
                    <button class="btn-2">Learn More</button>
                </div>
                <div class="card">
                    <h3 class="h3">Land</h3>
                    <p class="p">Create, review and publish your <br> collections of Wearables and <br> Emotes.</p>
                    <img class="img" src="../assets/photox.jpeg" alt="Photo">
                    <button class="btn-1">Manage Collections</button>
                    <button class="btn-2">Learn More</button>
                </div>
                <div class="card">
                    <h3 class="h3">Names</h3>
                    <p class="p">Create, review and publish your <br> collections of Wearables and <br> Emotes.</p>
                    <img class="img" src="../assets/photoxx.jpeg" alt="Photo">
                    <div class="buttons">
                        <button class="btn-1">Manage Collections</button>
                        <button class="btn-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="hrefs">
                <a class="a" href="/">Home</a>
                <a class="a" href="/privacy">Privacy Policy</a>
                <a class="a" href="/termofuse">Terms of use</a>
                <a class="a" href="/contentpolicy">Content Policy</a>
                <a class="a" href="/codeofethics">Code of Ethics</a>
            </div>
            <div class="Social">
                <!-- İkonlar yerleştirilecek ve sosyal medya hesaplarına yönlendirecek. -->
                2023 Decentrelands
            </div>
        </div>
    </div>
</template>


<script>

import BuilderTopBar from '../components/BuilderTopBar.vue';
import TopBar from './TopBar.vue';

export default {
    components: { BuilderTopBar, TopBar },
    methods: {
        home() {
            this.$router.push('/')
        },
        privacy() {
            this.$router.push('./privacy')
        }
    }
}
</script>

<style scoped>
.kapsa {
    background-color: rgba(0, 0, 0, 0.892);
}

.cards {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
}

.card {
    height: 600px;
    width: 300px;
    margin-top: 50px;
    background-color: rgba(169, 169, 169, 0.058);
    transition: transform 1s;
}
.card:hover{
    transform: translateY(-8px);
}
.buttons{
    display: flex;
    flex-direction: column;
    height: 100px;
    width: max-content;
    margin-top: 25px;
}
.footer {
    align-items: end;
    justify-content: space-between;
    text-align: end;
    display: flex;
    margin-top: 130px;
    position: relative;
}

.h3 {
    text-align: center;
    color: white;
}

.btn-1 {
    color: white;
    background-color: deeppink;
    font-size: larger;
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 4px;
    display: inline-block;
    width: 280px;
}

.p {
    color: gray;
    text-align: center;
    margin-right: 10px;
}

.btn-2 {
    font-size: larger;
    color: deeppink;
    background-color: transparent;
    height: 45px;
    width: 280px;
    border:1px solid black;
    border-radius: 4px;
}

.img {
    height: 350px;
    width: 300px;
    object-fit: cover;
    border: none;
    border-radius: 0;
}

.Social {
    text-align: end;
    align-items: end;
}

.a {
    text-decoration: none;
    justify-content: space-between;
    padding: 20px;
    color:darkgray;
}

.hrefs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}</style>