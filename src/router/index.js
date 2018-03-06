import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/BasicTemplate'
import Door from '@/components/Door'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/door',
      name: 'Door',
      component: Door
    }/*,
    {
      path: '/edit-book/:id',
      name: 'EditBook',
      component: EditBook
    }*/
  ]
})
