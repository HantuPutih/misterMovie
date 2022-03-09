import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Details from "@/views/Details";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
