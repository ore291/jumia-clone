
import { createStore } from 'vuex'
import { useSupabase } from 'vue-3-supabase'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      products: null
    }
  },
  mutations: {
    setProducts (state, data) {
      state.products = data;
    }
  },
  actions:{
    async fetchProducts (context) {
      try {
         let { data } = await useSupabase()
      .from("products")
      .select("*");
      console.log(data)
      context.commit('setProducts', data)
      } catch (error) {
        console.log(error)
      }
     
    },
    
  },
  getters:{
     products(state){
      return state.products 
    }
  }
})

export default store