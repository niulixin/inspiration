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
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your header.vue',
      arrs: [1,2,3,4],
      clik: '点击+'
    }
  },
  created(){
     this.getdata();
  },
  methods:{
    ...mapActions(['setCartNum']),
      add (){
        this.setCartNum(this.getCartNum+1);
      },
      getdata(){
        let _this = this;
        this.$http.post("/xinda-api/recommend/list",{}).then(function (res) {
          _this.list_page_ajax = res.data.data.hq;
          console.log(_this.list_page_ajax)
        })
        //  this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/register/sendsms',qs.stringify({cellphone: 12345678901,smsType:1,imgCode:'gb4n'})).then(function(data){
        //   console.log(data);
        // })
      }
  },
  computed:{
      ...mapGetters(['getCartNum','getCart'])
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
