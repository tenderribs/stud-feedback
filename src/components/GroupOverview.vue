<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useFeedbackStore } from '@/stores/feedback'
import FullModal from './FullModal.vue'
import type { Group } from '@/models/models'
import SfButton from './SfButton.vue'

const store = useFeedbackStore()
const showModal = ref(false)

const newGroup: Ref<Group> = ref({} as Group)
const studentList: Ref<string> = ref('')

const submit = () => {
  if (!newGroup.value || !studentList.value) return
  if (!newGroup.value.name.length || !studentList.value.length) return

  const rows = studentList.value.split('\n')

  store.groups.push({
    name: newGroup.value.name,
    members: rows.map((row: string) => {
      const [name, phone] = row.split(',', 2)
      return { name, phone }
    })
  })

  // reset the group value
  newGroup.value = {} as Group
  showModal.value = false
}
</script>

<template>
  <div>
    <full-modal v-if="showModal" @close="showModal = false">
      <div>
        <div class="mb-5">
          <div class="mb-1">New Group Name</div>
          <input
            type="text"
            class="rounded w-full border px-2 py-0.5"
            v-model="newGroup.name"
            placeholder="Grade 7"
          />
        </div>

        <div>
          <div class="mb-2">Student, phone number (CSV)</div>
          <textarea
            class="rounded w-full border px-2 py-0.5"
            v-model="studentList"
            placeholder="John, +1 (443) 676-4150&#13;&#10;Jane, +1 (443) 676-4150"
            rows="15"
            autocorrect="off"
            autocomplete="off"
          ></textarea>
        </div>

        <sf-button icon="bi-check" @click="submit">Done</sf-button>
      </div>
    </full-modal>

    <sf-button @click="showModal = true" icon="bi-plus" class="mb-8"> New grade </sf-button>

    <router-link
      :to="{
        name: 'GroupFeedback',
        params: { idx: index }
      }"
      class="w-full flex flex-row justify-center mb-5 px-5 border border-solid p-5 text-xl rounded"
      v-for="(group, index) in store.groups"
      v-bind:key="index"
    >
      {{ group.name }}
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
