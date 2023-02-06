import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Playback from "../views/Playback.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/playback",
      name: "playback",
      component: Playback,
    },
  ],
});

export default router;
