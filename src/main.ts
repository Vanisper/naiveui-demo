import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AppProvider from "./components/AppProvider/index.vue";


const app = createApp(App);
const appProvider = createApp(AppProvider);
appProvider.mount('#appProvider', true)
app.mount('#app')
