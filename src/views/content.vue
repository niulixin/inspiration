<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>{{getCartNum}}</h3>
    <button type="button" @click="add()">点击减少</button>
    <router-link to="/">go Hello</router-link>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'content',
  data () {
    return {
      msg: 'Welcome to Your content.vue'
    }
  },
  methods:{
    ...mapActions(['setCartNum']),
    add(){
      this.setCartNum(this.getCartNum-1)
    }
  },
  computed:{
    ...mapGetters(['getCartNum', 'getCart'])
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
