import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardComponent from '../components/CardComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/topic/:title',
    name: 'Topic',
    component: CardComponent,
    props: true,
  },
  {
    path: '/topic/:title/details',
    name: 'TopicDetail',
    component: () => import('../views/TopicDetail.vue'),
    props: true,
  },
  {
    path: '/topic/:title/exercises',
    name: 'SolvedExercises',
    component: () => import('../views/SolvedExercisesView.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
