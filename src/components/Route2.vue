<template>
  <div class="container">
    <div class="row">
      <div class="col-12 h1">Second Routed</div>
      <div class="col-12"><p>This is the second routed component</p></div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
