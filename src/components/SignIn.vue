<template>
    <div class="home">
        <TopBar />
        <form class="kapsayici" @submit.prevent="validateForm">
            <div class="form">
                <h2 class="h2">SIGN IN</h2>
                <label class="lbl">Enter the Username</label>
                <input type="text" v-model="user.username" class="inp" placeholder="Username">
                <label class="lbl">Enter the Password</label>
                <input type="text" v-model="user.password" class="inp" placeholder="Enter the Password">
                <span class="span">If you don't have any account <a href="./signUp" class="a">click here</a></span>
                <button class="login" @click="login">Login</button>
                <p class="p">If you forget your password please <a href="/hesapkurtarma" class="a">click here</a></p>
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
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import TopBar from './TopBar.vue';

export default {
    data() {
        return {
            errors: {
                email: false,
                password: false
            },
            user: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        checkEmail(email) {
                const isValidEmail = String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                    return isValidEmail !== null
        },
        validateForm() {
            if(this.checkEmail(this.user.email)=== null){
                this.errors.email=true
            }
            else{
                this.user.email=false
            }
            if(this.user.password.trim().length<8){
                this.errors.password=true
            }
            else{
                this.errors.password=false
            }
        },
        login() {
            //Checkbox onaylıysa bu durumda SMTP protokolüyle kullanıcının mail adresine mail atacak.
            //Eğer checkbox onaylı değilse bu durumda da kullanıcıya kırmızı renk temalı uyarı verecek fonksiyon yazılacak.

            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcuFOA2gapxtKzTUH6IwJnE52aGijE6gs', {
                email: 'abc@mail.com',
                password: '12345678',
                returnSecureToken: true
            }).then((res) => {
                console.log('res', res)
            })
        }
    },
    components: { TopBar }
}

</script>

<style scoped>
.home {
    background-color: black;
}

.kapsayici {
    background-image: url('../assets/dec11.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
}

.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    width: 400px;
    justify-content: center;
    text-align: center;
    background-color: black;
    margin-left: 530px;
    margin-bottom: 40px;
}

.h2 {
    color: white;
    margin-top: 0;
}

.login {
    width: 100px;
    height: 30px;
    color: white;
    background-color: gray;
    border: 1px solid black;
    border-radius: 5px;
}

.lbl {
    color: white;
    margin: 20px;
    padding-top: 20px;
}

.inp {
    height: 30px;
    width: 90%;
    border: 1px solid black;
    border-radius: 5px;
}

.footer {
    background-color: black;
    margin-top: 70px;
    padding-top: 10px;
}

.hrefs {
    display: flex;
    justify-content: space-around;
    height: 30px;
}

.fa {
    text-decoration: none;
    color: gray;
    margin-top: 5px;
}

.p {
    font-size: 18px;
    color: white;
}

.span {
    margin: 15px;
    color: white;
    font-size: 18px;
}

.a {
    text-decoration: none;
    font-size: 18px;
}
</style>