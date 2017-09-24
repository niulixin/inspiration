import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Header from '@/components/Header'
import content from '@/views/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
