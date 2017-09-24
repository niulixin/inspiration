<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-for="arr of arrs">{{arrs[arr-1]}}</p>
    <router-link to="content">content</router-link>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your header.vue',
      arrs: [1,2,3,4]
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
