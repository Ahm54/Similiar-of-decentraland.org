<template>
    <TopBar />
    <div class="main">
        <div class="div-1">
            <div class="categories">
                <h4 class="kategori">Categories</h4>
                <h3 class="h3">Wearbales</h3>
                <h3 class="h3">Head</h3>
                <h3 class="h3">Upper Body</h3>
                <h3 class="h3">Handwear</h3>
                <h3 class="h3">Lower Body</h3>
                <h3 class="h3">Feet</h3>
                <h3 class="h3">Accesories</h3>
                <h3 class="h3">Skins</h3>
                <h3 class="h3">Emotes</h3>
                <h3 class="h3">Names</h3>
            </div>
            <div class="smart">
                <p class="p">smart</p>
            </div>
            <br>
            <div class="rarity">
                <button class="btn">Common</button>
                <button class="btn">Uncommon</button>
                <button class="btn">Rare</button>
                <button class="btn">Epic</button>
                <button class="btn">Legendary</button>
                <button class="btn">Mythic</button>
                <button class="btn">Unique</button>
            </div>
            <div class="status">
                <input type="radio" class="input" />
                <label class="lbl">On Sale</label>
                <input type="radio" class="input" />
                <label class="lbl">Only Available For Minting</label>
                <input type="radio" class="input" />
                <label class="lbl">Only Listing</label>
                <input type="radio" class="input" />
                <label class="lbl">Not For Sale</label>
            </div>
            <br>
            <div class="creator">
                <p class="p-creator">Creators</p>
                <input type="text" placeholder="SEARCH CREATORS" class="inp-creator" />
            </div>
            <br>
            <div class="collection">
                <p class="collecion-p">Collections</p>
                <input type="text" placeholder="SEARCH COLLECTION" class="inp-collection" />
            </div>
            <br>
            <div class="network">
                <p class="p-network">NETWORK</p>
                <input type="radio" />
                <label class="lbl">All Networks</label>
                <input type="radio" />
                <label class="lbl">Ethereum</label>
                <input type="radio" />
                <label class="lbl">Polygon</label>
            </div>
            <br>
            <div class="bodyshape">
                <p class="p-bodyshape">BODY SHAPE</p>
                <input type="radio" class="bodyshape-inp" />
                <label class="lbl">All Body Shapes</label>
                <input type="radio" class="bodyshape-inp" />
                <label class="lbl">Available for Female</label>
                <input type="radio" class="bodyshape-inp" />
                <label class="lbl">Available for Male</label>
            </div>
        </div>
        <div class="div-2">
            <div class="divv">
                <input type="text" class="div2-inp" placeholder="Search" />
                <p class="div2-p">6.395 items</p>
            </div>
            <div class="cards">
                <div class="card">
                    <img class="img-2" src="../assets/photo-1.jpg" alt="Photo">
                    <h4 class="h4-2">Dj Cat</h4>
                    <p class="p-2">MonsterHall</p>
                    <h2 class="h2-2">20</h2>
                    <button class="btn-2">Epic</button>
                </div>
                <div class="card">
                    <img src="../assets/photo-2.jpeg" class="img-2" alt="Photo">
                    <h4 class="h4-2">Cosmic Courier</h4>
                    <p class="p-2">MonsterHall</p>
                    <h2 class="h2-2">20</h2>
                    <button class="btn-2">Epic</button>
                </div>
                <div class="card">
                    <img class="img-2" src="../assets/photo-3.jpg" alt="Photo">
                    <h4 class="h4-2">Cooking Master</h4>
                    <p class="p-2">MonsterHall</p>
                    <h2 class="h2-2">20</h2>
                    <button class="btn-2">Epic</button>
                </div>
                <div class="card">
                    <img class="img-2" src="../assets/photo.jpeg" alt="Photo">
                    <h4 class="h4-2">Dj Cat</h4>
                    <p class="p-2">Metafox Egytipian God</p>
                    <h2 class="h2-2">100</h2>
                    <button class="btn1">Mythic</button>
                </div>
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

<style scoped>
.main{
    padding-top:20px ;
    display: flex;
    flex-direction: row;
}
.div-1 {
    width: 300px;
    background-color: darkslategrey;
}
.div-2{
    width: 100%;
    background-color: black;
}
.cards{
    display: flex;
    flex-direction: row;
    background-color: black;
    width:800px;
}
.kategori {
    text-align: left;
    padding-left: 800px;
}
.h4-2{
    color:white;
    padding-left:30px;
}
.div2-p{
    text-align: left;
    padding-left:20px;
    color:white;
}
.p-2{
    color:gray;
    padding-left:30px;
}
.btn-2{
    color:white;
    background-color:cornflowerblue;
    width: 60px;
    height: 25px;
    border:1px solid white;
    border-radius: 3px;
    margin-left:30px;
}
.h2-2{
    color:white;
    padding-left:30px;
}
.btn1{
    color:white;
    background-color: pink;
    width:60px;
    height: 25px;
    border:1px solid white;
    border-radius: 3px;
    margin-left: 30px;
    margin-bottom: 30px;
}
.img-2{
    height: 250px;
    width: 250px;
    padding:30px;
}
.categories {
    width: 300px;
    padding: 0;
    border: 1px solid gray;
    background-color: black;
    border-radius: 4px;
}

.smart {
    background-color: black;
    margin-top: 20px;
    padding-top: 50px;
    border: 1px solid gray;
    border-radius: 4px;
}
.div2-inp{
    padding:10px;
    height: 30px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 10px;
    border:1px solid gray;
    border-radius: 2px; 
    background-color: aqua;
}
.p {
    font-size: 20px;
    text-align: left;
    padding-top: 10px;
    padding-left: 10px;
}

.h3 {
    color: gray;
    padding-left: 10px;
}

.h3:hover {
    color: white;
}
.rarity{
    padding:3px;
    /* margin: 4px; */
    background-color: black;
}
.btn{
    padding:3px;
    margin:10px;
    background-color: gray;
    color:white;
    width:70px ;
}
.status{
    padding-top:40px;
    padding-bottom:30px;
    background-color: black;
    border:1px solid gray;
    border-radius: 4px;
    margin-top:15px;
    display: flex;
    flex-direction: column;
}
.creator{
    height: 100px;
    width:100%;
    background-color: black;
    padding-top:15px;
    border:1px solid gray;
    border-radius: 4px;
}
.inp-creator{
    height: 25px;
    width: 80%;
    border:1px solid gray;
    border-radius: 4px;
}
.p-creator{
    font-size: 16px;
}
.collection{
    height: 100px;
    width:100%;
    background-color: black;
    padding-top:15px;
    border:1px solid gray;
    border-radius: 4px;
}
.inp-collection{
    height: 25px;
    width: 80%;
    border:1px solid gray;
    border-radius: 4px; 
}
.network{
    width: 100%;
    height: 150px;
    background-color: black;
    border:1px solid gray;
    border-radius: 4px;
}
.card{
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    padding-left: 30px;
    width: 240px;
}
.bodyshape{
    width: 100%;
    height: 200px;
    background-color: black;
    border:1px solid gray;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
}
</style>