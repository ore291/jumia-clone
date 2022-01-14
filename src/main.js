import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import supabase from 'vue-3-supabase'
import store from './store/';
import router from './pages/router.js'
import 'tw-elements';

 

 
// you can also set the default icon set, check below for set names




const app = createApp(App)

app.use(supabase, {
    supabaseUrl : import.meta.env.VITE_SUPABASE_URL,
  supabaseKey : import.meta.env.VITE_SUPABASE_KEY
})

app.use(store)
app.use(router)



app.mount("#app")

