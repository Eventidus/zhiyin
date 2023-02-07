import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Playback from "../views/Playback.vue";
import SongRec from "../views/SongRec.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        isShow: true,
      },
    },
    {
      path: "/playback",
      name: "playback",
      component: Playback,
    },
    {
      path: "/songRec",
      name: "songRec",
      component: SongRec,
    },
  ],
});

export default router;
