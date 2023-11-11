<template>
    <div class="kapsayici">
        <TopBar />
        <div class="topbar">
            <a class="a" href="./allarticles">All Articles</a>
            <a class="a" href="./anonsapp">Announcements</a>
            <a class="a" href="./platform">Platform</a>
            <a class="a" href="./projectupdate">Project Updates</a>
            <a class="a" href="./technology">Technology</a>
            <a class="a" href="./tutorials">Tutorials</a>
            <input type="text" class="inp" placeholder="search..." />
        </div>
        <div class="main">
            <div style="width: 50%;">
                <img src="@/assets/foto.jpg" alt="Photo" class="img" />
            </div>
            <div class="yazi" style="display: flex;width:50%;flex-direction: column;">
                <p style="color:white;text-align: center;margin-left:0;margin-right: 100px;">Nov 05, 2023 <span
                        style="color:gray;text-align: center;">ANNOUNCEMENTS</span></p>
                        <h1 style="text-align: center;text-align: left;color:white;margin-left: 180px;">Announcing the <br> Decentraland <br> Community Summit</h1>
                        <p style="color:white;margin-left: 180px;text-align: left;">Apply to attend the first-ever Decentraland <br> Community Summit in Argentina, May 22-24, <br> 2024, to celebrate Decentraland’s progress, <br> forge deeper connections, and shape the <br> platform's future together.</p>
            </div>
        </div>
        <hr>
        <div class="cards">
            <div class="card">
                <img src="@/assets/photo-1.jpg" alt="Photo" class="card-img" />
                <p class="tarih">Sep 20,2023</p>
                <p class="anons">Announcements</p>
                <h4 style="color:white;">What you can do in the Metaverse <br> Find your place in Decentraland</h4>
            </div>
            <div class="card">
                <img src="@/assets/photo-2.jpeg" alt="Photo" class="card-img" />
                <p class="tarih">Sep 20,2023</p>
                <p class="anons">Announcements</p>
                <h4 style="color:white;">What you can do in the Metaverse <br> Find your place in Decentraland</h4>
            </div>
            <div class="card">
                <img src="@/assets/photo-3.jpg" alt="Photo" class="card-img" />
                <p class="tarih">Sep 20,2023</p>
                <p class="anons">Announcements</p>
                <h4 style="color:white;">What you can do in the Metaverse <br> Find your place in Decentraland</h4>
            </div>
            <div class="card">
                <img src="@/assets/photo.jpeg" alt="Photo" class="card-img" />
                <p class="tarih">Sep 20,2023</p>
                <p class="anons">Announcements</p>
                <h4 style="color:white;">What you can do in the Metaverse <br> Find your place in Decentraland</h4>
            </div>
            <div class="card">
                <img src="@/assets/photox.jpeg" alt="Photo" class="card-img" />
                <p class="tarih">Sep 20,2023</p>
                <p class="anons">Announcements</p>
                <h4 style="color:white;">What you can do in the Metaverse <br> Find your place in Decentraland</h4>
            </div>
            <div class="card">
                <img src="@/assets/photoxx.jpeg" alt="Photo" class="card-img" />
                <p class="tarih">Sep 20,2023</p>
                <p class="anons">Announcements</p>
                <h4 style="color:white;">What you can do in the Metaverse <br> Find your place in Decentraland</h4>
            </div>
        </div>
        <button class="btn-1">Load More</button>
        <hr>
        <div class="weekly">
            <div class="week">
                <h2 class="h2">Decentraland Weekly</h2>
                <p class="weekly-p">Subscribe for platform news, exciting in world events and <br>
                    developments for the Decentraland community</p>
            </div>
            <div class="weekly-email">
                <input type="email" class="weekly-inp" placeholder="Enter Your Email" />
                <button class="weekly-btn">Subscribe</button>
            </div>
        </div>
        <div class="social-media">
            <a href="https://discord.com" class="dsc">Join us on Discord</a>
            <a href="https://twitter.com/home?lang=tr" class="dsc">Follow us on Twitter</a>
            <a href="https://web.telegram.org/k/" class="dsc">Join us on Telegram</a>
            <a href="#" class="dsc">Get Started with our SDK</a>
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
.topbar {
    height: 60px;
    width: 100%;
    background-color: black;
    justify-content: space-between;
    text-align: right;
}

.main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 500px;
}

.inp {
    width: 350px;
    text-align: left;
    height: 30px;
    padding-right: 100px;
    margin: 10px;
    padding-top: 5px;
}
.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
  flex: 0 0 30%; /* Kartların yüzde 30 genişliğinde olmasını sağlar */
  margin-bottom: 20px; /* Kartlar arasına boşluk ekler, isteğe bağlı */
}
.a {
    color: white;
    font-size: 18px;
    margin: 10px;
    font-weight: 300;
    padding-left: 5px;
    text-decoration: none;
}

.img {
    height: 400px;
    width: 100%;
    margin-top: 10px;
    border: none;
    border-radius: 0;
    margin-left: 150px;

}

.card-img {
    height: 300px;
    width: 400px;
    margin-top: 20px;
}

.searchbar {
    padding-right: 5px;
    background-color: black;
    width: 80px;
    height: 8px;
}

.btn-1 {
    background-color: black;
    border: 1px solid blue;
    border-radius: 2px;
    margin: 30px;
    color: white;
    height: 40px;
    width: 190px;
    padding-left: 20px;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: inherit;
}

.weekly {
    background-color: black;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    flex-direction: row;
}

.weekly-inp {
    padding-right: 0;
    border: 3px solid chocolate;
    border-radius: 3px;
    height: 20px;
    width: 250px;
}

.weekly-btn {
    background-color: chocolate;
    color: white;
    padding-left: 0;
    height: 28px;
    width: 90px;
    border: 1px solid orange;
    border-radius: 2px;
}

.week {
    display: flex;
    flex-direction: column;
    height: 200px;
}

.h2 {
    color: white;
    text-align: center;
}

.social-media {
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: large;
    margin: 30px;
}

.weekly-p {
    color: white;
}

.weekly-email {
    padding-top: 30px;
    display: flex;
    justify-content: end;
    text-align: end;
}
.anons{
    color:white;
}
.tarih{
    color:white;
}
.dsc {
    font-size: 16px;
    margin: 20px;
    padding-right: 20px;
    padding-left: 20px;
    text-decoration: none;
}
</style>