<template>
    <TopBar />
    <div class="topbardao">
        <a href="./marketplace" class="topbar-a">MARKETPLACE</a>
        <a href="./builderapp" class="topbar-a">BUILDER</a>
        <a href="./docsapp" class="topbar-a">DOCS</a>
        <a href="./placesapp" class="topbar-a">PLACES</a>
        <a href="./eventsapp" class="topbar-a">EVENTS</a>
        <a href="./daoapp" class="topbar-a">DAO</a>
        <a href="./blogapp" class="topbar-a">BLOG</a>
        <button class="signIn">SIGN IN</button>
    </div>
    <div class="main">
        <h1 style="margin-top: 250px;color:white;font-size: 40px;z-index: 2;">DECENTRALAND DAO</h1>
        <p style="text-align: center;color:white;font-size: 25px;z-index:2;margin-bottom: 120px;">The Virtual world in your
            hands</p>
    </div>
    <div class="div1">
        <div class="imgg" style="display: flex;width: 50%;margin-top: 50px;margin-left: 150px;">
            <img src="../assets/photo-1.jpg" alt="image" class="img"
                style="float: left; width: auto;height: 350px;border:none;border-radius: 0;size: cover;object-fit:cover;vertical-align: middle;">
        </div>
        <p style="color:black;text-align: left;margin-left: 0;font-size: 20px;margin-top: 65px;"> Decentraland is the first
            fully decentralized virtual world. It was <br> always part of the
            original
            vision to hand over control to the people <br> who create and play in this virtual space. In short – you,
            the
            users. <br> Through the DAO, you are in control of the policies created to <br> determine how the world
            behaves: for
            example, what kinds of <br> wearable items are allowed (or disallowed) after the launch of <br> the DAO,
            moderation of
            content, LAND policy and auctions, among <br> others.</p>
    </div>
    <div class="div2" style="">
        <span class="span2" style="width: 50%;">
            <h1 class="div2-h1" style="text-align: left;margin-left: 80px; font-size: 40px; padding-top: 140px;">Why has the
                DAO been <br> created? How is it relevant <br> to me?</h1>
            <p class="p2"
                style="letter-spacing: 1px; font-size: larger; text-align: left; margin-left: 80px; margin-bottom: 100px;">
                Decentraland is the first fully decentralized virtual world. It was <br> always part of the
                original
                vision to hand over control to the people <br> who create and play in this virtual space. In short – you,
                the
                users. <br> Through the DAO, you are in control of the policies created to <br> determine how the world
                behaves: for
                example, what kinds of <br> wearable items are allowed (or disallowed) after the launch of <br> the DAO,
                moderation of
                content, LAND policy and auctions, among <br> others.</p>
        </span>
        <img src="../assets/photo-3.jpg" alt="image" class="img2"
            style="height: 400px; width: 40%; margin-right: 50px; float: right;">
    </div>
    <div class="div1">
        <div class="imgg" style="display: flex;width: 50%;margin-top: 50px;margin-left: 150px;">
            <img src="../assets/photo-1.jpg" alt="image" class="img"
                style="float: left; width: auto;height: 350px;border:none;border-radius: 0;size: cover;object-fit:cover;vertical-align: middle;">
        </div>
        <p style="color:black;text-align: left;margin-left: 0;font-size: 20px;margin-top: 65px;"> Decentraland is the first
            fully decentralized virtual world. It was <br> always part of the
            original
            vision to hand over control to the people <br> who create and play in this virtual space. In short – you,
            the
            users. <br> Through the DAO, you are in control of the policies created to <br> determine how the world
            behaves: for
            example, what kinds of <br> wearable items are allowed (or disallowed) after the launch of <br> the DAO,
            moderation of
            content, LAND policy and auctions, among <br> others.</p>
    </div>
    <div class="infos">
        <h1 class="info-h1">More Info</h1>
        <div class="cards-info">
            <h3 class="card-h3">Security Advisory Board? What’s that?</h3>
            <p class="card-p">The DAO is supported by the Security Advisory Board (SAB). The SAB acts as the guarantor of
                contract security, tasked with the job of providing a swift response to bug reports. The Board will be able
                to
                quickly upgrade the smart contract implementation of the LAND and Estate contracts and replace it with a
                bug-free version upon receiving a responsible disclosure bug report. All contract updates must be unanimous.
                Comprising 5 members, the Board will be made up of several expert entities or individuals initially chosen
                by
                the Decentraland team and later appointed by the community.</p>
        </div>
        <div class="cards-info">
            <h3 class="card-h3">How can SAB members be changed?</h3>
            <p class="card-p">Members can be changed by the Aragon DAO – a vote must be started to remove or install a new
                member. This is an action that will involve the community using wMANA. A member of the SAB creates a vote
                for
                the community to add or remove a member of the SAB and community members use wMANA to cast their vote. "You
                can
                <a class="card-a" href="#"> read more about the Security Advisory Board here." </a>
            </p>
        </div>
        <div class="cards-info">
            <h3 class="card-h3">How do I elevate a Vote?</h3>
            <p class="card-p">Initially, until fraud risk is reduced to its minimum extent possible, votes will only be
                created
                and scheduled by the Security Advisory Board (SAB).</p>
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
.main {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    height: 600px;
    background-clip: url('../assets/dark-video.mp4');
    background-size: cover;
    background-repeat: no-repeat;
}

.infos {
    padding-top: 20px;
}

.buttons {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding-right: 340px;
}

.h-1 {
    text-align: right;
    padding-left: 1px;
    align-items: right;
    display: flex;
}

.span-baslik {
    color: white;
    font-size: 20px;
    text-align: center;
}

.div1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.div2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.divparagraf {
    margin-right: 250px;
}

.div2paragraf {
    align-items: flex-end;
}

.img-2 {
    max-width: 500px;
    margin-right: 20px;
    height: 300px;
    width: 400px;
}

.topbardao {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
}

.topbar-a {
    color: black;
    margin-left: 20px;
    margin-top: 10px;
    text-align: left;
    text-decoration: none;
}

.info-h1 {
    margin-top: 100px;
    padding-top: 40px;
}

.signIn {
    width: 200px;
    font-size: 16px;
    height: 40px;
    text-align: center;
    margin-left: 650px;
    background-color: deeppink;
    margin-bottom: 6px;
    color: white;
    float: right;
    border: 1px solid white;
    border-radius: 6px;
}

.baslik {
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top: 300px;
    margin-left: 50px;
    font-size: 70px;
    z-index: 0;
    color: white;
}

.img {
    height: 300px;
    width: 400px;
}

.h-1 {
    text-align: left;
    font-size: 30px;
}

.h1 {
    text-align: left;
    margin-left: 50px;
    margin-right: 100px;
}

.p12 {
    font-size: 20px;
    text-align: left;
    margin-left: 50px;
    letter-spacing: 1px;
}

.p {
    text-align: center;
    font-size: large;
    color: white;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    margin-left: 100px;
    padding-bottom: 30px;
}

.btn-1 {
    background-color: chocolate;
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: 540px;
    width: 220px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    margin-right: 20px;
}

.btn-2 {
    background-color: white;
    color: black;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
}

.cards-info {
    border: 3px solid gray;
    border-radius: 5px;
    background-color: white;
    margin-bottom: 40px;
}

.card-h3 {
    font-size: 25px;
    color: black;
    padding-left: 30px;
}

.card-p {
    padding-left: 30px;
    color: gray;
    font-size: 30px;
}

.card-a {
    color: red;
}
</style>