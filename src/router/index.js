import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import HelloWorld from "@/components/HelloWorld";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello/:id",
    name: "hello",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
