<template>
  <div>
    <button
      type="button"
      class="btn btn-primary w-100"
      data-toggle="modal"
      data-target="#addModal"
    >
      Add new Student
    </button>
    <div
      class="modal fade"
      id="addModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Student</h5>
            <button
              type="button"
              class="btn-close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="idInput" class="form-label">Id</label>
                <input
                  type="text"
                  class="form-control"
                  id="idInput"
                  placeholder="Id"
                  v-model="stdid"
                />
              </div>
              <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="nameInput"
                  placeholder="Name"
                  v-model="stdname"
                />
              </div>
              <div class="mb-3">
                <label for="cityInput" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="cityInput"
                  placeholder="City"
                  v-model="stdcity"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="raiseEvent"
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              Add
            </button>
          </div>
        </div>
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
    raiseEvent() {
      let createdObj = {
        id: this.stdid,
        name: this.stdname,
        city: this.stdcity,
      };
      this.$emit("addStudent", createdObj);
    },
  },
};
</script>
