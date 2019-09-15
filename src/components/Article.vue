<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>{{$route.params.title}}</h2>
    </div>
</template>
<script>
export default {
    name: 'Article',
    data () {
        return {
            msg: 'Hi, I am Article Page!'
        }
    }
}
</script>

<style scoped>
</style>