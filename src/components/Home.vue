<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 添加子路由导航 -->
    <p>
      导航 ：
      <router-link to="/home">首页</router-link>|
      <router-link :to="{name:'article',params:{title:'标题'}}">子页面1</router-link>|
      <router-link to="/home/timeline/2/标题2">子页面2</router-link>
      <button @click="toThreePage">页面3-params传参</button>
    </p>
    <!-- 子页面展示部分 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Home Page!"
    };
  },
  methods: {
    toThreePage() {
      this.$router.push({
        name: "collect",
        params: { id: 1, name: "zhangsan" }
      });
    }
  }
};
</script>

<style scoped>
</style>