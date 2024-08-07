<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useFeedbackStore } from '@/stores/feedback'
import FullModal from './FullModal.vue'
import type { Group } from '@/models/group'

const store = useFeedbackStore()
const showModal = ref(false)

const newGroup: Ref<Group> = ref({} as Group)
const studentList: Ref<string> = ref('')

const submit = () => {
  if (!newGroup.value || !studentList.value) return
  if (!newGroup.value.name.length || !studentList.value.length) return

  store.groups.push({
    name: newGroup.value.name,
    members: studentList.value.split('\n')
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
        <div>New Group Name</div>

        <input type="text" v-model="newGroup.name" placeholder="ex. Grade 7" />

        <div>Students (each on separate line)</div>
        <textarea
          v-model="studentList"
          placeholder="John Doe&#13;&#10;Jane Smith"
          rows="10"
          autocorrect="off"
          autocomplete="off"
        ></textarea>

        <button class="button" @click="submit">Submit</button>
      </div>
    </full-modal>

    <button @click="showModal = true" class="button">+ Add new group</button>

    <div class="list-item" v-for="(group, index) in store.groups" v-bind:key="index">
      {{ group.name }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
