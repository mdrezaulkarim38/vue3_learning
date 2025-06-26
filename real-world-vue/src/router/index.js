import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventListView.vue'
import EventDetails from '@/views/EventDetails.vue'
import About from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/events/:id',
    name: 'event-details',
    component: EventDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
