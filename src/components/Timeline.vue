<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>ID：{{ $route.params.id}}</p>
    <p>名称：{{ $route.params.name}}</p>
  </div>
</template>
<script>
export default {
  name: "Timeline",
  data() {
    return {
      msg: "Hi, I am Timeline Page!"
    };
  }
};
</script>

<style scoped>
</style>