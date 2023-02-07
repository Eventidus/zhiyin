<template>
  <div class="songRec">
    <div class="title">
      <span @click="goHome">歌曲推荐</span>
    </div>
    <div class="songlist">
      <div class="song">
        <img src="../assets/images/song.png" alt="" class="cover" />
        <div class="detail">
          <p>飘洋过海来看你</p>
          <span>周深</span>
        </div>
        <div class="play-button">
          <img src="../assets/images/24gf-play.png" alt="" />
          <img src="../assets/images/play-circle.png" alt="" />
        </div>
      </div>
      <div class="song">
        <img src="../assets/images/song1.png" alt="" class="cover" />
        <div class="detail">
          <p>雪落下的声音</p>
          <span>周深</span>
        </div>
        <div class="play-button">
          <img src="../assets/images/24gf-play.png" alt="" />
          <img src="../assets/images/play-circle.png" alt="" />
        </div>
      </div>
      <div class="song">
        <img src="../assets/images/song3.png" alt="" class="cover" />
        <div class="detail">
          <p>愿得一人心</p>
          <span>周深</span>
        </div>
        <div class="play-button">
          <img src="../assets/images/24gf-play.png" alt="" />
          <img src="../assets/images/play-circle.png" alt="" />
        </div>
      </div>
      <div class="song">
        <img src="../assets/images/song2.png" alt="" class="cover" />
        <div class="detail">
          <p>可它爱着这世界</p>
          <span>周深</span>
        </div>
        <div class="play-button">
          <img src="../assets/images/24gf-play.png" alt="" />
          <img src="../assets/images/play-circle.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "SongRec",
  methods: {
    goHome() {
      this.$router.push({ name: "songRec" });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/fonts/font.css";
.title {
  margin-left: 0.4rem;
  margin-top: 0.64rem;
  font-family: MiSans, Roboto, "Microsoft YaHe";
  position: relative;
  span {
    width: 1.92rem;
    height: 0.77rem;
    line-height: 0.77rem;
    display: inline-block;
    color: #060837;
    letter-spacing: 0.010667rem;
    font-size: 0.426667rem;
    background-image: url(../assets/images/circle.png);
    background-size: 0.76rem 0.77rem;
    background-repeat: no-repeat;
    background-position: 1.16rem 0;
  }
}
.songlist {
  padding: 0.32rem 0.4rem;
  .song {
    height: 1.49rem;
    position: relative;
    display: flex;
    margin-bottom: 0.09rem;
    .cover {
      width: 14.67vw;
      height: 14.67vw;
    }
    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 0.25rem;
      padding-top: 0.28rem;
      padding-bottom: 0.28rem;
      p {
        font-family: SourceHanSansCN;
        font-size: 0.4rem;
        margin-top: 0;
        margin-bottom: 0.21rem;
      }
      span {
        font-family: SourceHanSansCN;
        font-size: 0.35rem;
        letter-spacing: 0.1rem;
        color: #666;
      }
    }
    .play-button {
      line-height: 1.49rem;
      position: absolute;
      right: 0;
      img:first-child {
        width: 0.24rem;
        height: 0.28rem;
        position: relative;
        top: -0.19rem;
        left: 0.47rem;
      }
      img {
        width: 0.63rem;
        height: 0.63rem;
      }
    }
  }
}
</style>
