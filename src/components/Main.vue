<template>
  <div>
    <main class="sm:px-20">
      <Flyout />
      <ProductsSlider :products="randProd" />
      <Cards
        :header="true"
        :leftImage="getImageUrl('../assets/oraimo-powerbank_572x250.png')"
        :rightImage="getImageUrl('../assets/pinnacle-yam-pounder_572x250.png')"
        :headerText="`New Year Vibes`"
      />
      <Cards
        :header="false"
        :leftImage="getImageUrl('../assets/umidigi-a9pro_572x250.png')"
        :rightImage="getImageUrl('../assets/yazole-mens-watch_572x250v2.png')"
      />
    </main>
  </div>
</template>

<script>
import Flyout from "./Flyout.vue";
import ProductsSlider from "./ProductsSlider.vue";
import Cards from "./Cards.vue";

export default {
  async mounted() {
    let { data: products, error } = await this.$supabase
      .from("products")
      .select("*");
    console.log(products);
    this.randProd = products.sort(() => 0.5 - Math.random()).slice(0, 6);
  },
  // async mounted () {
  //   const { user, session, error } = await this.$supabase.auth.signUp({
  //     email: 'user@provider.com',
  //     password: 'myawesomepassword',
  //   })
  //   console.log(user, session, error)
  // },
  data() {
    return {
      randProd: null,
    };
  },
  components: {
    Flyout,
    ProductsSlider,
    Cards,
  },
  methods: {
    getImageUrl(name) {
      return new URL(name, import.meta.url).href;
    },
  },
};
</script>

<style>
</style>