<template>
  <div class="home">
    <div class="carousel">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
      >
        <swiper-slide
          ><img src="../assets/images/banner.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../assets/images/banner.png" alt=""
        /></swiper-slide>
        <swiper-slide
          ><img src="../assets/images/banner.png" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100% /* 348/16 */ /* 348/16 */;
}
.swiper-button-next,
.swiper-button-prev {
  height: 50px;
  width: 75px;
  padding: 10px;
}
</style>
