import {createRouter, createWebHashHistory} from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'
import ViewStats from '@/views/ViewStats.vue'
import Auth from "@/views/Auth.vue";
import {useStoreAuth} from "@/stores/storeAuth";

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/editNote/:id',
    name: 'edit-note',
    component: ViewEditNote
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to) => {
  const storeAuth = useStoreAuth()
  if (!storeAuth.user?.id && to.name !== "auth") {
    return {name: "auth"}
  }
  if (storeAuth.user.id && to.name === "auth") {
    return false
  }
})

export default router
