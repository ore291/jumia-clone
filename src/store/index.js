import { createStore } from "vuex";
import { useSupabase } from "vue-3-supabase";
import axios from "axios";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
  },
  actions: {
    async fetchProducts(context) {
      //  try {
      //   const res = await axios.get('https://fakestoreapi.com/products/');
      //   context.commit('setProducts', res.data);
      //  } catch (error) {
      //    console.log(error)
      //  }
      try {
        let { data } = await useSupabase().from("products").select("*");
        context.commit("setProducts", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
   randomProducts :(state) =>(state.products.sort(() => Math.random() - Math.random()).slice(0, 6)),
   latestProducts: (state) => state.products.slice(3,9)
  },
});

export default store;
