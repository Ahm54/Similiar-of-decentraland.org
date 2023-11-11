<template>
    <div class="main">
        <a href="./builderoverview" class="a">Overview</a>
        <a href="./buildercollections" class="a">Collections</a>
        <a href="./builderscenes" class="a">Scenes</a>
        <a href="./builderland" class="a">Land</a>
        <a href="./buildername" class="a">Names</a>
        <a href="./marketplace" class="a">Worlds</a>
    </div>
</template>

<script>
export default{

}
</script>

<style scoped>
.main{
    text-align: right;
    margin:0;
    background-color: transparent;
    justify-content: space-evenly;
    height: 50px;
    width:50%;
}
.a{
    color:white;
    padding-top:9px;
    font-size: 20px;
    padding-left:10px;
    padding-right: 10px;
    text-decoration: none;
}
a:hover{
    color:plum;
}
.a:active{
    text-decoration:dotted;
}
</style>