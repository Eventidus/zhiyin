import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/playback",
      name: "playback",
      component: () => import("@/views/Playback.vue"),
    },
    {
      path: "/songRec",
      name: "songRec",
      component: () => import("@/views/SongRec.vue"),
    },
  ],
});

export default router;
