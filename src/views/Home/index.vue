<template>
  <div class="poge-home">
    <!-- 首页头部 -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>

    <br/>

    <Swiper class="my-swiper" :autoplay="1000" :loop="true" @change="fn1" v-if="bannerList.length > 0">
      <SwiperItem v-for="item in bannerList" :key="item.id">
        <img :src="item.imageurl" alt="">
      </SwiperItem>
    </Swiper>

    <nav class="index-nav">
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-1">
            <img src="../../assets/nav-icon1.png" alt />
          </div>
          <p class="nav-text font-24">分类</p>
        </div>
      </a>
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-2">
            <img src="../../assets/nav-icon2.png" alt />
          </div>
          <p class="nav-text font-24">排行</p>
        </div>
      </a>
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-3">
            <img src="../../assets/nav-icon3.png" alt />
          </div>
          <p class="nav-text font-24">VIP专区</p>
        </div>
      </a>
      <a href="#">
        <div class="nav-item">
          <div class="nav-pic pic-4">
            <img src="../../assets/nav-icon4.png" alt />
          </div>
          <p class="nav-text font-24">历史</p>
        </div>
      </a>
    </nav>

    <section class="index-recommend">
    <div class="recommend-divide"></div>
    <div class="recommend-title">
        <div class="title-group">
            <img class="title-icon" src="https://img.manhuadao.cn/upload/icon/180208/ic_rexue.png">
            <span class="title-text font-36">燃烧吧热血</span>
        </div>
        <span class="title-more font-24">更多 &gt;</span>
    </div>
    <div class="recommend-type-1">
        <div class="item">
            <img class="item-pic" src="https://img.manhuadao.cn/upload/BigBook201905/314b3ba47fb74621883462c8662aaed6.jpg">
            <p class="item-name font-28">驭灵师</p>
            <p class="item-text font-24">取代主角的光环作者</p>
        </div>
        <div class="item">
            <img class="item-pic" src="https://img.manhuadao.cn/upload/BigBook201812/773db9e30dc043df9ad19eb142ac0dbd.jpg">
            <p class="item-name font-28">天才高手</p>
            <p class="item-text font-24">屌丝美男的各种宿命的纠缠</p>
        </div>
        <div class="item">
            <img class="item-pic" src="https://img.manhuadao.cn/upload/BigBook201907/fa3e71b6701449fb90b54e3d8e341b8d.jpg">
            <p class="item-name font-28">末世恋爱法则</p>
            <p class="item-text font-24">孤女重生，狂虐渣男，手撕绿茶</p>
        </div>
        <div class="item">
            <img class="item-pic" src="https://img.manhuadao.cn/upload/BigBook201903/f90e5ead5452431b94b90e4cc2b1a9c7.png">
            <p class="item-name font-28">末世为王</p>
            <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'

import { getBanner } from '@/api/cartoon'

export default {
  name: 'Home',

  components: {
    Swiper,
    SwiperItem
  },

  data () {
    return {
      bannerList: []
    }
  },

  methods: {
    fn1 (index) {
      console.log(index)
    }
  },

  created () {
    getBanner().then(res => {
      console.log(res)
      if (res.code === 200) {
        this.bannerList = res.info
      } else {
        alert(res.code_msg)
      }
    }).catch(err => {
      console.log(err)
      alert('网络异常，请稍后重试')
    })
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.poge-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .index-header {
    @include border-bottom;
    display: flex;
    height: 44px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    // border-bottom: 1px solid #ddd;

    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/user-btn.png") no-repeat;
      background-size: 100%;
    }

    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../assets/login.png") no-repeat;
      background-size: 100%;
    }

    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/search.png");
      background-size: 100%;
    }
  }
}

.my-swiper img{
  width: 100%;
}

.index-nav {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  text-align: center;

  .nav-item {
    width: 55px;
    height: 75px;

    .nav-text {
      color: #8d8d8d;
    }

    .nav-pic {
      width: 55px;
      height: 55px;

      img {
        width: 100%;
      }
    }
  }
}

.recommend-divide {
  height: 10px;
  background-color: #f4f4f4;
}

.recommend-title {
  width: 100%;
  height: 24px;
  display: flex;
  margin: 20px 0;
}

.title-more {
  font-size: 12px;
  margin-right: 20px;
  color: #b0b0b0;
  line-height: 23px;
}

.title-text {
  display: flex;
  font-size: 20px;
  color: #3a3a3a;
  font-weight: 500;
}

.title-group {
  width: 150px;
  height: 23px;
  display: flex;
  line-height: 23px;
  flex: 1;
  margin-left: 120px;

  img {
    padding-top: 5px;
    margin-right: 5px;
    width: 22px;
    height: 22px;
  }
}

.index-recommend{
  overflow-y: scroll;
}

.recommend-type-1 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 0.26666667rem;
}

.item {
  width: 173px;
  height: 218px;

  img {
    width: 173px;
    height: 173px;
  }

  .item-name {
    color: #3a3a3a;
    font-size: 12px;
    line-height: 20px;
  }

  .item-text {
    font-size: 12px;
    color: #8d8d8d;
    line-height: 20px;
  }
}
</style>
