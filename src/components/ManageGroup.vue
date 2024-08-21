<script setup lang="ts">
import { useFeedbackStore } from '@/stores/feedback'
import type { Group, Member } from '@/models/models'
import { computed, onMounted, ref, type Ref } from 'vue'
import SfButton from './SfButton.vue'

const vFocus = {
  mounted: (el: HTMLTextAreaElement) => el.focus()
}

const store = useFeedbackStore()

// Basic Idea: if you get idx "new", then make a new group. Otherwise modify an existing one
const props = defineProps({
  idx: String
})

const group = computed(() => {
  if (props?.idx === 'new') {
    return newGroup.value
  }

  return store.groups[groupIndex.value]
})

onMounted(() => {
  // Initialize the students list from the stored group info
  if (group.value.members?.length > 0) {
    const rows = group.value.members.map((member: Member) => {
      return member.name + ', ' + member.phone
    })

    studentList.value = rows.join('\n')
  }
})

const newGroup: Ref<Group> = ref({} as Group)

// editable buffer to edit students info
const studentList: Ref<string> = ref('')

const groupIndex = computed(() => Number(props.idx))

const save = () => {
  if (!group.value || !studentList.value) return
  if (!group.value.name.length || !studentList.value.length) return

  if (props.idx === 'new') {
    // create a new empty group if necessary
    store.groups.push({} as Group)
  }

  // get correct group index, as newest or props
  const index = props.idx === 'new' ? store.groups.length - 1 : Number(props.idx)

  // save the data to store for appropriate group
  store.groups[index] = {
    name: group.value.name,
    members: studentList.value.split('\n').map((row: string) => {
      const [name, phone] = row.split(',', 2)
      return { name: name.trim(), phone: phone.trim() }
    })
  }

  icon.value = 'bi-check'
  setTimeout(() => (icon.value = 'bi-save'), 1000)
}

const icon = ref('bi-save')
</script>

<template>
  <div>
    <sf-button @click="$router.go(-1)" icon="bi-arrow-left" class="mb-5">Back</sf-button>
    <div class="mb-5">
      <div class="mb-1">Class name</div>
      <input
        type="text"
        class="rounded w-full border px-2 py-0.5"
        v-model="group.name"
        placeholder="Grade 7"
      />
    </div>

    <div>
      <div class="mb-2">Student, phone number (CSV)</div>
      <textarea
        class="rounded w-full border px-2 py-0.5"
        v-model="studentList"
        placeholder="John, +1 (443) 676-4150&#13;&#10;Jane, +41 78 626 39 34"
        rows="15"
        autocorrect="off"
        autocomplete="off"
        v-focus
      ></textarea>
    </div>
    <sf-button :icon="icon" class="mb-5" @click="save">Save changes</sf-button>
  </div>
</template>

<style scoped lang="scss"></style>
