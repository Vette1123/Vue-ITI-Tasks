<template>
  <div class="container my-2">
    <DynamicVue />

    <div class="row">
      <FooterComponent />
    </div>
    <!-- <div class="row">
      <BookComponent />
    </div> -->
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
import BodyComponent from "./components/Content.vue";
import DynamicVue from "./components/Dynamic.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DynamicVue,
  },
};
</script>
