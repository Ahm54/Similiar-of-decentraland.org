import { createApp } from 'vue'
import App from './App.vue'
import { Plugin } from 'vue-responsive-video-background-player';
import router from './router'
import store from './store/store'
import WeatherApp from './components/WeatherApp.vue'


createApp(App).use(WeatherApp).use(router).use(store).use(Plugin).mount('#app')
