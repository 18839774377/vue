<template>
  <div class="photoinfo-container">
    <!-- <h2>123</h2> -->
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>

    <hr>
    <!-- 缩略图 -->
    <div class="thumbs">
      <vue-preview :slides="list"></vue-preview>
    </div>

    <!-- 图片内容 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {}, //图片详情
      list: [] //缩略图
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    // 获取图片详情
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        console.log(result);
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    // 获取缩略图
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        console.log(result);
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
          });
          this.list = result.body.message;
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
  .thumbs {
    .my-gallery {
      display: flex;
      flex-wrap: wrap;
      figure {
        margin: 10px;
        box-shadow: 0 0 10px #999;
        img {
          width: 100px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>