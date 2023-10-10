import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/router/HomePage.vue";
import ItemPage from "../views/router/ItemPage.vue";
import NotFoundPage from "../views/router/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/item/:id",
    name: "ItemPage",
    component: ItemPage,
    props: true
  },
  {
    path: "/:notFound",
    name: "NotFoundPage",
    component: NotFoundPage,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
