import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'

import ManageGroups from './components/ManageGroup.vue'
import GroupFeedback from './components/GroupFeedback.vue'
import GroupOverview from './components/GroupOverview.vue'

import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

// set up persistent state
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const router = createRouter({
  history: createMemoryHistory(),

  routes: [
    {
      path: '/',
      name: 'GroupOverview',
      component: GroupOverview
    },
    {
      path: '/group/',
      component: GroupFeedback
    },
    {
      path: '/group/manage',
      component: ManageGroups
    }
  ]
})
app.use(pinia)
app.use(router)

app.mount('#app')
