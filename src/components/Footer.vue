<template>
  <div class="footer">
    <div class="top">
      <div class="light">
        <img src="../assets/images/records.png" alt="" class="record" />
        <img src="../assets/images/recordCover.png" alt="" class="cover" />
      </div>
      <p>漂洋过海来看你</p>
      <div class="right">
        <img src="../assets/images/stop.png" alt="" class="play" />
        <img src="../assets/images/playlist.png" alt="" class="list" />
      </div>
    </div>
    <div class="bottom">
      <div class="icon">
        <img src="../assets/images/icon1.png" alt="" />
        <p>发现音乐</p>
      </div>
      <div class="icon">
        <img src="../assets/images/icon2.png" alt="" />
        <p class="icon2">我的音乐</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  width: 10rem;
  height: 2.88rem;
  background-image: url(../assets/images/footerBg.png);
  background-repeat: no-repeat;
  background-size: contain;
  .top {
    height: 1.05rem;
    display: flex;
    background-image: url(../assets/images/top-front.png);
    background-size: 9.71rem 0.93rem;
    background-repeat: no-repeat;
    background-position: center 0.12rem;
    position: relative;
    .light {
      .record {
        position: relative;
        bottom: 0.25rem;
        width: 11.6vw;
        height: 11.6vw;
        margin-left: 3.67vw;
        // animation: rotate 2s linear infinite;

        // @keyframes rotate {
        //   0% {
        //     transform: rotate(0deg);
        //   }
        //   100% {
        //     transform: rotate(360deg);
        //   }
        // }
      }
      .cover {
        width: 8.4vw;
        height: 8.4vw;
        position: relative;
        left: -10.15vw;
        top: -4.05vw;
      }
    }
    p {
      font-family: MiSans;
      font-size: 3.2vw;
      color: #dcdddf;
      position: relative;
      left: -3.2vw;
    }
    .right {
      position: absolute;
      right: 8vw;
      vertical-align: baseline;
      .play {
        position: relative;
        top: 2.13vw;
        width: 7.47vw;
        height: 7.47vw;
        margin-right: 3.47vw;
      }
      .list {
        position: relative;
        top: 0.5vw;
        width: 5.47vw;
        height: 4.67vw;
      }
    }
  }
  .bottom {
    height: 1.83rem;
    display: flex;
    justify-content: space-around;
    .icon {
      text-align: center;
      margin-top: 0.35rem;
      img {
        width: 0.52rem;
        height: 0.6rem;
      }
      p {
        font-size: 0.29rem;
        letter-spacing: 0.01rem;
        margin: 0;
        color: #0063ff;
        font-family: MiSans;
      }
      p.icon2 {
        color: #fff;
      }
    }
  }
}
</style>
