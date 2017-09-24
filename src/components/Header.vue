<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="content">content</router-link>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your header.vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang = "less">
@red : red;
h1 {
  font-weight: normal;
  color: @red;
}
</style>
