<template>
  <div class="playback">
    <div class="head">
      <div class="top">
        <img src="../assets/images/songRec/arrow.png" alt="" />
        <span>特别的人</span>
        <img src="../assets/images/playback/share.png" alt="" />
      </div>
      <div class="bottom"><span>方大同-</span><span>危险世界</span></div>
    </div>
    <span>d</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.playback {
  padding: 7.87vw 4.53vw;
  background-image: url(../assets/images/playback/playbackBg.png);
  background-repeat: no-repeat;
  background-size: cover;
  .head {
    .top {
      text-align: center;
      img:first-child {
        width: 2.8vw;
        height: 5.47vw;
        position: absolute;
        left: 4.53vw;
      }
      img:last-child {
        width: 6.93vw;
        height: 6.4vw;
        position: absolute;
        right: 4.53vw;
      }
      span {
        font-family: SourceHanSansCN-Normal;
        font-size: 4.8vw;
        color: #fff;
      }
    }
    .bottom {
      text-align: center;
      span {
        font-family: SourceHanSansCN-ExtraLight;
        font-size: 3.2vw;
        color: #666666;
      }
    }
  }
  span {
    color: #fff;
  }
}
</style>
