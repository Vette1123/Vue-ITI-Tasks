import { createApp } from "vue";
// import App from "./App.vue";
// import Wrapper from "./Wrapper.vue";
// import Task1 from "./components/Task1.vue";
// import Modal from "./components/ModalTask.vue";
import Header from "./components/Header.vue";
import router from "./routers/index";

// createApp(Wrapper).mount("#app");
// createApp(Task1).mount("#app");
// createApp(Modal).mount("#app");
createApp(Header).use(router).mount("#app");
