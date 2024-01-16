import {createRouter, createWebHistory} from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'

const routes = [
  {
    path: '/vue-course/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/vue-course/editNote/:id',
    name: 'edit-note',
    component: ViewEditNote
  },
  {
    path: '/vue-course/stats',
    name: 'stats',
    component: ViewStats
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
