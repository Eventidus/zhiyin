<template>
  <div class="songRec">
    <header>
      <img src="../assets/images/songRec/arrow.png" alt="" class="arrow" />
      <p>歌曲推荐</p>
      <img src="../assets/images/songRec/more.png" alt="" class="more" />
    </header>
    <div class="detail">
      <img src="../assets/images/songRec/bigCover.png" alt="" />
      <div class="text">
        <p>漂洋过海来看你</p>
        <p>歌手：周深</p>
        <p>也曾彼此安慰 也曾相拥叹息</p>
        <p>不管将会面对什么样的结局</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.songRec {
  padding-top: 9.07vw;
  background-image: url(../assets/images/songRec/bg.png);
  padding-left: 4.53vw;
  padding-right: 4.53vw;
  header {
    display: flex;
    height: 5.47vw;
    .arrow {
      width: 2.8vw;
      height: 5.47vw;
    }
    p {
      font-family: SourceHanSansCN;
      font-size: 4.8vw;
      color: #fff;
      margin: 0;
      margin-left: 33.2vw;
      margin-right: 34.53vw;
    }
    .more {
      width: 1.07vw;
      height: 5.2vw;
    }
  }
  .detail {
    display: flex;
    margin-top: 9.33vw;
    height: 36.93vw;
    img {
      width: 36.93vw;
      height: 36.93vw;
    }
    .text {
      margin-top: 1.87vw;
      margin-bottom: 1.87vw;
      margin-left: 2.67vw;
      p {
        color: #fff;
        margin: 0;
        font-family: SourceHanSansCN;
        color: #d2d2d2;
        &:first-child {
          font-size: 4.8vw;
          margin-bottom: 3.87vw;
          letter-spacing: 0.12vw;
          color: #fff;
        }
        &:nth-child(2) {
          font-size: 4vw;
          letter-spacing: 0.11vw;
          margin-bottom: 12.8vw-1.73vw;
        }
        &:nth-child(3),
        &:nth-child(4) {
          font-size: 3.2vw;
          letter-spacing: 0.08vw;
          margin-top: 1.73vw;
        }
      }
    }
  }
}
</style>
