import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type Group } from '../models/models'

export const useFeedbackStore = defineStore(
  'feedback',
  () => {
    const groups: Ref<Group[]> = ref([
      {
        name: 'Example Grade',
        members: [
          { name: 'Stud 1', phone: '12391283912' },
          { name: 'Stud 2', phone: '12312312312' }
        ]
      }
    ])

    return { groups }
  },
  {
    persist: true
  }
)
