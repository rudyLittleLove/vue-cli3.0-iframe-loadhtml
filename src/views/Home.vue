<template>
  <div class="home">
    <button @click="clickHandle">switch</button>
    <iframe ref="iframe" frameborder="0" v-if="ifIframe"></iframe>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      ifIframe: true,
      iframeData: require("./blog.html")
      // src: "./static/blog.html"
    };
  },
  mounted() {
    this.$refs.iframe.contentDocument.documentElement.innerHTML = this.iframeData;
  },
  methods: {
    clickHandle() {
      // 1.通过DOM操作切换数据源信息
      // 因可能在iframe内部点击了外链信息，src会发生改变，可能就不属于同源。不同源外部就无法操作iframe内部DOM，因此使用v-if 删除DOM后再显示清空src信息
      // 也可以使用其他方式清除，比如用v-bind 绑定src
      // this.ifIframe = false;

      this.$refs.iframe.removeAttribute("src");

      this.$nextTick(() => {
        // this.ifIframe = true;
        this.$nextTick(() => {
          this.$refs.iframe.contentDocument.documentElement.innerHTML = require("./second.html");
        });
      });

      // 2.切换路径促使切换数据
      // this.src = "./static/second.html";
    }
  }
};
</script>

<style>
iframe {
  width: 800px;
  height: 100vh;
  display: block;
  margin: 0 auto;
}
button {
  position: fixed;
  left: calc(50% - 450px);
  top: 50px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 3px 5px;
  cursor: pointer;
}
</style>
