import { createRouter, createWebHistory } from 'vue-router'
import EventLayout from '@/views/event/Layout.vue'
import EventList from '@/views/EventList.vue'
import EventDetails from '@/views/event/Details.vue'
import EventEdit from '@/views/event/Edit.vue'
import EventRegister from '@/views/event/Register.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails,
      },
      {
        path: '/event/:id/register',
        name: 'EventRegister',
      
        component: EventRegister,
      },
      {
        path: '/event/:id/edit',
        name: 'EventEdit',
    
        component: EventEdit,
      },
    ],
  },
{
  path: '/event/:afterEvent(.*)',
  redirect: to =>{
    return { path: '/events/'+ to.params.afterEvent }
  }
},
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
