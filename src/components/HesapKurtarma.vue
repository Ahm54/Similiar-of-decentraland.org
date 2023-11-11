<template>
    <div class="main">
        <label class="lbl">Enter the Email Address</label>
        <input type="email" placeholder="Mail Address">
        <button class="btn" @click="sendEmail">Send Email</button>
    </div>
</template>

<script>
export default{
    methods:{
        sendEmail(){
            // Smtp protokolü ile email atılacak.
        }
    }
}
</script>

<style scoped></style>