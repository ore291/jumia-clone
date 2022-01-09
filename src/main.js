import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import supabase from 'vue-3-supabase'
 

 
// you can also set the default icon set, check below for set names




const app = createApp(App)

app.use(supabase, {
    supabaseUrl : import.meta.env.VITE_SUPABASE_URL,
  supabaseKey : import.meta.env.VITE_SUPABASE_KEY
})

// Use supabase
// app.use(supabase, {
//   supabaseUrl: import.meta.env.VITE_SUPABASE_URL, // actually you can use something like import.meta.env.VITE_SUPABASE_URL
//   supabaseKey: import.meta.env.VITE_SUPABASE_KEY, // actually you can use something like import.meta.env.VITE_SUPABASE_KEY,
//   options: {}
// })

app.mount("#app")

