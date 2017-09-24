<template>
  <div>
    <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      msg: 'Welcome to Your content.vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: red;
}   
</style>
