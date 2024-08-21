import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type Group } from '../models/models'

export const useFeedbackStore = defineStore(
  'feedback',
  () => {
    const groups: Ref<Group[]> = ref([
      {
        name: 'Grade 7',
        members: [
          { name: 'Candice', phone: '+1 (650) 326-9462' },
          { name: 'Joe', phone: '+1 420 069 13 37' }
        ]
      }
    ])

    return { groups }
  },
  {
    persist: true
  }
)
