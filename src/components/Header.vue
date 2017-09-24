<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-for="arr of arrs">{{arrs[arr-1]}}</p>
    <p>{{getCartNum}}</p>
    <button type="button" @click="add()">{{clik}}</button>
    <p>{{getCart}}</p>
    <router-link to="content">content</router-link>
    </div>
</template>

<script>
import {mapGetters,mapActions,mapState} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your header.vue',
      arrs: [1,2,3,4],
      clik: '点击+'
    }
  },
  methods:{
    ...mapActions(['setCartNum']),
      add () {
        console.log();
        this.setCartNum(this.getCartNum+1);
      }
  },
  computed:{
      ...mapGetters(['getCartNum','getCart']),
      // ...mapGetters([]),
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
