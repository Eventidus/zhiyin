<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from "./views/Home.vue";
import SongRec from "./views/Songrec.vue";
</script>

<template>
  <Home v-show="$route.meta.isShow"></Home>
  <SongRec></SongRec>
</template>

<style scoped lang="less"></style>
