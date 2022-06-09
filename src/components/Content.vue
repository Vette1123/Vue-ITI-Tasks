<template>
  <div class="container">
    <table class="table table-bordered table-striped text-center">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>
            <router-link :to="'/studentdetails/' + student.id">{{
              student.name
            }}</router-link>
          </td>
          <td>{{ student.city }}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning"
              data-toggle="modal"
              data-target="#updateModal"
              @click="setUpdateData(student)"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            |
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteStudent(student.id)"
            >
              <i class="fa-solid fa-circle-xmark"></i>
            </button>
          </td>
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
      <AddVue @addStudent="testEventRaised" />
    </div>

    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update Student</h5>
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
                  disabled
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
              @click="updateStudent()"
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddVue from "./Add.vue";
export default {
  data() {
    return {
      students: [],
      formData: {},
      stdid: "",
      stdname: "",
      stdcity: "",
    };
  },
  async created() {
    const allStudents = await fetch("http://localhost:5000/students");
    this.students = await allStudents.json();
  },
  methods: {
    async testEventRaised(data) {
      await fetch("http://localhost:5000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      this.students.push(data);
    },
    setUpdateData(student) {
      this.stdid = student.id;
      this.stdname = student.name;
      this.stdcity = student.city;
    },
    async updateStudent() {
      let updateObj = {
        id: this.stdid,
        name: this.stdname,
        city: this.stdcity,
      };
      await fetch(`http://localhost:5000/students/${this.stdid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObj),
      });
      this.students.find((student) => student.id == this.stdid).name =
        this.stdname;
      this.students.find((student) => student.id == this.stdid).city =
        this.stdcity;
    },
    async deleteStudent(_id) {
      if (confirm("Are you sure you want to delete this student?")) {
        await fetch(`http://localhost:5000/students/${_id}`, {
          method: "DELETE",
        });
        this.students = this.students.filter((s) => s.id != _id);
      }
    },
  },
  components: {
    AddVue,
  },
};
</script>
