<template>
<div class="Navbar navbar-expand-lg navbar-light">
  <img src="../assets/logo.jpeg" alt="foto" style="height: 50px;margin-top: 10px; margin-left: 30px; float: left; width: 50px; border:1px solid transparent; border-radius: 50%;">
  <button @click="$router.push('./marketplace')" class="btn btn-primary-outline text-white">MARKETPLACE</button>
  <button @click="$router.push('./builderapp')" class="btn btn-primary-outline text-white">BUILDER</button>
  <button @click="$router.push('./docsapp')" class="btn btn-primary-outline text-white">DOCS</button>
  <button @click="$router.push('./placesapp')" class="btn btn-primary-outline text-white">PLACES</button>
  <button @click="$router.push('./eventsapp')" class="btn btn-primary-outline text-white">EVENTS</button>
  <button @click="$router.push('./daoapp')" class="btn btn-primary-outline text-white">DAO</button>
  <button @click="$router.push('./blogapp')" class="btn btn-primary-outline text-white">BLOG</button>
  <button class="btn-default" style="color: white;background-color: deeppink;border: 1px solid white;border-radius: 4px;height: 30px;margin-right: 5px;margin-top: 18px;float:right;" @click="$router.push('#')">JUMP IN</button>
  <button class="btn-default" style="color:white;background-color: black;border: 1px solid white;border-radius: 4px;float:right;margin-right: 10px;margin-top:18px;height: 30px;" @click="$router.push('#')">SIGN IN TO MY ACCOUNT</button>
</div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {}
  },
}
</script>

<style scoped>
.signin{
  margin-top: 15px;
  width: 220px;
  height: 30px;
  background-color: transparent;
  color:white;
  border:none;
  float: right;
}
.jumpin{
  height: 30px;
  background-color: deeppink;
  color:white;
  margin-left: 40px;
  float: right;
  margin-top: 15px;
  margin-right: 15px;
  border:1px solid black;
  border-radius: 5px;
  padding-right: 25px;
}
.Navbar{
  height: 70px;
  width: 100%;
  background-color: transparent !important;
}
.foto {
  width: 60px;
  height: 60px;
  border: 1px solid white;
  border-radius: 50%;
  float: left;
}
.navbar-nav .nav-link {
  color: #FFF;
  margin-right: 10px;
}

.btn-primary {
  background-color: deeppink;
  border: 1px solid black;
  border-radius: 5px;
}
.a{
  margin-top: 20px;
  text-decoration: none;
  margin-right: 10px;
  color:white;
  background-color: transparent;
  float: left;
  margin-left: 20px;
}
.navbar {
  border: 3px solid white;
  border-radius: 5px;
  padding-top: 0;
  height: 80px;
}

.navbar-brand {
  margin-right: 50px;
}
</style>
