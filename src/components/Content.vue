<template>
  <div class="container">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.city }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="3" class="text-center">
            Total Number Of Students: {{ students.length }}
          </th>
        </tr>
      </tfoot>
    </table>
    <div class="row">
      <button
        data-bs-toggle="modal"
        href="#form"
        role="button"
        class="btn btn-primary py-2 my-1"
      >
        Add new Student
      </button>
    </div>
    <div id="form" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Student</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
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
                  v-model="formData.id"
                />
              </div>
              <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="nameInput"
                  placeholder="Name"
                  v-model="formData.name"
                />
              </div>
              <div class="mb-3">
                <label for="cityInput" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="cityInput"
                  placeholder="City"
                  v-model="formData.city"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button @click="addStudent" type="button" class="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import students from "../student";

export default {
  data() {
    return {
      students,
      formData: {},
    };
  },

  methods: {
    addStudent(e) {
      this.students.push(this.formData);
      this.formData = {};
      document.querySelector(".btn-close").click();
    },
  },
};
</script>

<style scoped></style>
