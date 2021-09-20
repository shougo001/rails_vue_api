import Vue          from 'vue'
import VueRouter    from 'vue-router'
import BookHome     from '../views/BookHome.vue'
import BookCreate   from '../views/BookCreate.vue'
import BookEdit     from '../views/BookEdit.vue'
import Signup       from '../views/Signup.vue'
import Signin       from '../views/Signin.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      name: 'BookHome',
      component: BookHome 
    },
    {
      path: '/create',
      name: 'BookCreate',
      component: BookCreate
    },
    {
      path: '/edit/:id',
      name: 'BookEdit',
      component: BookEdit
    },
    { 
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
});

export default router;
