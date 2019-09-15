<template>
  <div class="collect">
    <p>ID：{{ $route.params.id}}</p>
    <p>名称：{{ $route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name: "Collect",
  data() {
    return {
      msg: "Hi, I am Collect Page!"
    };
  }
};
</script>
<style scoped>
</style>

