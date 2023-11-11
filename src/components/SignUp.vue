<template>
    <div class="kapsayici">
        <TopBar />
        <div class="main">
            <h1 class="h1">Open the account</h1>
            <div class="form">
                <label class="lbl">Enter the Username</label>
                <input type="text" class="inp" v-model="user.username" placeholder="username">
                <label class="lbl">Enter the Password</label>
                <input type="text" class="inp" v-model="password" placeholder="password">
                <label class="lbl">Confirm the Password</label>
                <input type="text" class="inp" v-model="user.confirmPassword" placeholder="confirm the password">
                <label class="lbl">Enter the Email Address</label>
                <input class="inp" v-model="user.email" type="email" placeholder="Your mail address" />
                <div class="yazi">
                    <input class="checkbox" type="checkbox" />
                    <p class="p">I accept</p>
                </div>
                <button class="btn" @click="KayitOl">SIGN UP</button>
                <span class="span">If you don't have any account please <a href="./signIn">click here</a></span>
                <p class="pgoogle"><i class="fab fa-google" style="color:white;" @click="SignUp"></i> Sign Up with Google
                    Account</p>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="hrefs">
            <a class="fa" href="/">Home</a>
            <a class="fa" href="/privacy">Privacy Policy</a>
            <a class="fa" href="/termofuse">Terms of use</a>
            <a class="fa" href="/contentpolicy">Content Policy</a>
            <a class="fa" href="/codeofethics">Code of Ethics</a>
        </div>
    </div>
</template>

<script>

import TopBar from './TopBar.vue';
import axios from 'axios';

export default {
    components: {
        TopBar
    },
    data() {
        return {
            email:'',
            username:'',
            password:'',
            confirmPassword:''
        }
    },
    methods: {
        KayitOl() {
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcuFOA2gapxtKzTUH6IwJnE52aGijE6gs', {
                email: 'abc@mail.com',
                password: '12345678',
                returnSecureToken: true
            }
            ).then((res) => {
                console.log('res', res)
            })
        }
    }
}
</script>

<style scoped>
.kapsayici {
    width: 100%;
    background-image: url('../assets/dec1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.home {
    background-color: black;
    width: 100%;
}

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
    background-color: black;
    height: 750px;
    width: 600px;
    display: flex;
    flex-direction: column;
}

.lbl {
    font-size: large;
    color: white;
    padding: 15px;
}

.span {
    color: white;
    font-size: 18px;
}

.pgoogle {
    color: white;
    font-size: 18px;
}

.inp {
    display: flex;
    height: 40px;
    width: 400px;
    border: 3px solid blue;
    border-radius: 5px;
}

.hrefs {
    margin-top: 5px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    text-align: center;
    background-color: black;
}

.fa {
    color: gray;
    text-decoration: none;
}

.p {
    font-size: large;
    padding: 5px;
}

.h2 {
    color: gray;
    font-size: 40px;
    text-shadow: 1px 1px white;
    padding-right: 440px;
    text-align: center;
}

.yazi {
    display: flex;
    flex-direction: row;
}

.h1 {
    text-align: center;
    margin-right: 450px;
    color: white;
}

.btn {
    height: 40px;
    width: 120px;
    color: blanchedalmond;
    background-color: #2c3e50;
    margin-bottom: 40px;
    border: 1px solid black;
    border-radius: 4px;
}</style>