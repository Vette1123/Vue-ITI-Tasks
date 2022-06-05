<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-2 my-2">
        <HeaderComponent />
      </div>
    </div>
    <div class="row my-2">
      <div class="col-4">
        <LinksComponent />
      </div>
      <div class="col-8">
        <BodyComponent />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";
import LinksComponent from "./components/Links.vue";
import BodyComponent from "./components/Content.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    BodyComponent,
  },
};
</script>
