<template>
  <div class="songListRec">
    <div class="title">
      <span>歌单推荐</span>
    </div>
    <div class="songList">
      <div class="list">
        <img src="../assets/images/1.png" alt="" />
        <p>单曲循环经典英文歌曲</p>
      </div>
      <div class="list">
        <img src="../assets/images/2.png" alt="" />
        <p>欧美精选:动感节奏，治瘾旋律</p>
      </div>
      <div class="list">
        <img src="../assets/images/3.png" alt="" />
        <p>【旋律控】超好听的欧美热门歌曲</p>
      </div>
      <div class="list">
        <img src="../assets/images/4.png" alt="" />
        <p>华语优质女声 藏在卡带里的旧时光</p>
      </div>
      <div class="list">
        <img src="../assets/images/5.png" alt="" />
        <p>断眉 卡妹 萌德 灰森戳爷</p>
      </div>
      <div class="list">
        <img src="../assets/images/6.png" alt="" />
        <p>国内大Diva｜听罢跪拜在姐姐的石</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../assets/fonts/font.css";
.title {
  margin-left: 0.4rem;
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
.songList {
  display: flex;
  padding: 0.4rem;
  flex-wrap: wrap;
  justify-content: space-between;
  .list {
    flex: 0 0 30.33%;
    height: 3.87rem;
    margin-bottom: 0.33rem;
    background-image: url(../assets/images/front.png);
    background-size: 2.39rem;
    background-repeat: no-repeat;
    background-position: center 0;
    img {
      width: 100%;
      height: 2.91rem;
      position: relative;
      top: 0.1rem;
    }
    p {
      font-family: SourceHanSansCN;
      color: #171717;
      font-size: 0.32rem;
      margin-top: 0.13rem;
    }
  }
}
</style>
