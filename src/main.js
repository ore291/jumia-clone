import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VIcon from 'vue-tailwind-icons';
 

 
// you can also set the default icon set, check below for set names


const app = createApp(App)
app.use(VIcon, { set: 'outline' })
app.mount("#app")

