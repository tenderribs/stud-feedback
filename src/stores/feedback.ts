import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { type Group } from '../models/group'

export const useFeedbackStore = defineStore(
  'feedback',
  () => {
    const groups: Ref<Group[]> = ref([
      {
        name: 'Example Grade',
        members: ['Student 1', 'Student 2']
      }
    ])

    return { groups }
  },
  {
    persist: true
  }
)
