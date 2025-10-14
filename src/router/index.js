import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import FacultyView from '../views/FacultyView.vue'
import SponsorsView from '../views/SponsorsView.vue'
import JoinView from '../views/JoinView.vue'
import ContactView from '../views/ContactView.vue'
import TeamHistoryView from '../views/TeamHistoryView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView
  },
  {
    path: '/faculty',
    name: 'Faculty',
    component: FacultyView
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: SponsorsView
  },
  {
    path: '/join',
    name: 'Join',
    component: JoinView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/team-history',
    name: 'TeamHistory',
    component: TeamHistoryView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0 }
    }
  }
})

export default router