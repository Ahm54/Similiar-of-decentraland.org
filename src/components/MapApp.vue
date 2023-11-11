<template>
    <div class="rows">
        <p>info@markethinkers.com</p>
        <br> <br>
        <p>05xx xxx xx xx</p>
        <br> <br>
        <p>Sepapaja 6, Tallinn 15551, Estonia</p>
        <br> <br>
        <i class="twiter ikonu"></i>
        <i class="facebook ikonu"></i>
        <i class="instagram ikonu"></i>
        <i class="linkedin ikonu"></i>
    </div>
    <div class="harita">
        <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>

import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent ({
    components:{
        GoogleMap,Marker
    },
    setup(){
        const center={ lat: 40.689247, lng: -74.044502 };

        return {center}
    }
})
</script>

<style scoped>
.harita {
    width: 100%;
    height: 600px;
}

.rows {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>