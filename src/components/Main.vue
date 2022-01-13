<template>
  <div>
    <main class="sm:px-20">
      <Flyout />
      <ProductsSlider title="Top Selling Items" :latest='true' />
      <Cards
        :header="true"
        :leftImage="getImageUrl('../assets/oraimo-powerbank_572x250.png')"
        :rightImage="getImageUrl('../assets/pinnacle-yam-pounder_572x250.png')"
        headerText="New Year Vibes"
      />
      <Cards
        :header="false"
        :leftImage="getImageUrl('../assets/umidigi-a9pro_572x250.png')"
        :rightImage="getImageUrl('../assets/yazole-mens-watch_572x250v2.png')"
      />
      <Collections />
      <Cards
        :header="true"
        :headerText="`<del>&#8358;</del>5,000 Store`"
        :leftImage="getImageUrl('../assets/i12-earphones_572x250.png')"
        :rightImage="getImageUrl('../assets/m6-smartwatch_572x250.png')"
      />
      <ProductsSlider title="Top Deals" />
    </main>
  </div>
</template>

<script>
import Flyout from "./Flyout.vue";
import ProductsSlider from "./ProductsSlider.vue";
import Cards from "./Cards.vue";
import Collections from "./Collections.vue";


export default {
  // async mounted() {
  //   let { data: products, error } = await this.$supabase
  //     .from("products")
  //     .select("*");
  //   // selects six random products from database
  //   this.randProd = products.sort(() => 0.5 - Math.random()).slice(0, 6);
  //    this.$store.commit('setProducts', products)
  // },
  // async mounted () {
  //   const { user, session, error } = await this.$supabase.auth.signUp({
  //     email: 'user@provider.com',
  //     password: 'myawesomepassword',
  //   })
  //   console.log(user, session, error)
  // },
  computed: {
   
  },
  components: {
    Flyout,
    ProductsSlider,
    Cards,
    Collections,
 
  },
  methods: {
    // getImageUrl(img) {
    //   const imgUrl = new URL(img, import.meta.url).href;
    //   return imgUrl;
    // },
   getImageUrl(name){
    const modules = import.meta.globEager("../assets/*.png");
    return modules[name].default;
  },
  },
};
</script>

<style>
</style>