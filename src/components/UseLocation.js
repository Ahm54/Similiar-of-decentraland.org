import {onUnMounted, OnMounted, ref} from 'vue';

export function useGeoLocation(){
    const coords = ref({latitude:0, longitude:0})
    const isSupported = 'navigator' in window && 'geolocation' in navigator

    let watcher = null
    OnMounted(()=>{
        if(isSupported){
            watcher=navigator.geolocation.watchPosition(
                position=>(coords.value = position.coords)
            )
        }
    })
    onUnMounted(()=>{
        if(watcher) navigator.geolocation.clearWatch(watcher)
    })

    return {coords,isSupported}
}