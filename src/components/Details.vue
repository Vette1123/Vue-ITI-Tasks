<template>
  <div class="container">
    <template> {{ loadStudent($route.params.id) }}</template>
    <div class="h2">Student Details</div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-subtitle mb-2">
          <span class="h3 text-muted">ID: </span>{{ stdid }}
        </h5>
        <hr />
        <h5 class="card-title">
          <span class="h3 text-muted">Name: </span>{{ stdname }}
        </h5>
        <hr />
        <h5 class="card-text">
          <span class="h3 text-muted">City: </span> {{ stdcity }}
        </h5>
        <hr />
        <router-link to="/" class="btn btn-primary">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stdid: "",
      stdname: "",
      stdcity: "",
    };
  },
  methods: {
    async loadStudent(_id) {
      const data = await fetch(`http://localhost:5000/students/${_id}`);
      let obj = await data.json();
      this.stdid = obj.id;
      this.stdname = obj.name;
      this.stdcity = obj.city;
    },
  },
};
</script>
