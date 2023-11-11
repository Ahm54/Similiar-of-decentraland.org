<template>
    <TopBar />
    <div class="main">
        <h2 class="h2">Bize ulaşmak için</h2>
        <form class="form">
            <label class="lbl">İsim giriniz</label>
            <input class="inp" type="text" placeholder="isim giriniz..." />
            <label class="lbl">Soyisim giriniz</label>
            <input class="inp" type="text" placeholder="soyisim giriniz..." />
            <label class="lbl">Telefon Numaranızı giriniz</label>
            <input class="inp" type="phone" placeholder="Telefon numaranızı giriniz..." />
            <label class="lbl">Email Adresinizi Giriniz</label>
            <input class="inp" type="email" placeholder="mail adresinizi giriniz" />
            <div class="yazi">
                <input class="checkbox" type="checkbox" />
                <p class="p">Okuduklarımı anladım. Onaylıyorum.</p>
            </div>
            <button class="btn" @click="Gonder">Gönder</button>
        </form>
    </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default {
    data() {
        return {};
    },
    methods: {
        Gonder() {
            //Checkbox onaylıysa bu durumda SMTP protokolüyle kullanıcının mail adresine mail atacak.
            //Eğer checkbox onaylı değilse bu durumda da kullanıcıya kırmızı renk temalı uyarı verecek fonksiyon yazılacak.
        }
    },
    components: { TopBar }
}

</script>

<style scoped>
.main {
    margin-top: 50px;
    margin-left: 400px;
    align-items: center;
    text-align: center;
    justify-content: center;
}

.form {
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: blanchedalmond;
    height: 500px;
    width: 600px;
    display: flex;
    flex-direction: column;
}

.lbl {
    font-size: large;
    color: grey;
    padding: 15px;
}

.inp {
    height: 30px;
    width: 400px;
    border: 3px solid blue;
    border-radius: 5px;
}

.p {
    font-size: large;
    padding: 5px;
}

.h2 {
    font-size: 40px;
    text-shadow: 1px 1px red;
}

.yazi {
    display: flex;
    flex-direction: row;
}

.btn {
    height: 40px;
    width: 120px;
    color: blanchedalmond;
    background-color: #2c3e50;
}</style>