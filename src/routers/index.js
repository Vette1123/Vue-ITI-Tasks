import { createRouter, createWebHistory } from "vue-router";

import Wrapper from "../Wrapper.vue";
import Route1 from "../components/Route1.vue";
import Route2 from "../components/Route2.vue";
import Error from "../components/Error.vue";
import Details from "../components/Details.vue";

const routes = [
  { path: "/", component: Wrapper },
  { path: "/first", component: Route1 },
  { path: "/second", component: Route2 },
  { path: "/studentdetails/:id", component: Details },
  { path: "/:catchAll(.*)", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
