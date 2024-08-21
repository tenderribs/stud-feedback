<script setup lang="ts">
import { useFeedbackStore } from '@/stores/feedback'
import { ref, computed, type Ref } from 'vue'
import FormItem from './FormItem.vue'
import SfButton from './SfButton.vue'

type FormEntry = {
  grade: string
  comments: string
}

const props = defineProps({
  idx: String
})
const store = useFeedbackStore()

const groupIndex = computed(() => Number(props.idx))
const group = computed(() => store.groups[groupIndex.value])

const currStudent = ref(0)

const selectedLetter = ref<string | undefined>(undefined)
const handleSelectedLetter = (letter: string | undefined) => {
  selectedLetter.value = letter
}

const student = computed(() => {
  return group.value.members[currStudent.value]
})

const cleanedNumber = computed(() => {
  return student.value.phone.replace(/[^0-9]/g, '')
})

const formValues: Ref<FormEntry[]> = ref([
  {} as FormEntry,
  {} as FormEntry,
  {} as FormEntry,
  {} as FormEntry
])

const comments: Ref<string> = ref('')

const formResponse = computed(() => {
  return `*${student.value.name}'s Daily Report Card*
\n1. Started and completed assignments: *${formValues.value[0].grade}*
${formValues.value[0].comments ? '> Comment: ' + formValues.value[0].comments : ''}
\n2. Contributed to group work: *${formValues.value[1].grade}*
${formValues.value[1].comments ? '> Comment: ' + formValues.value[1].comments : ''}
\n3. Respected other's space and belongings: *${formValues.value[2].grade}*
${formValues.value[2].comments ? '> Comment: ' + formValues.value[2].comments : ''}
\n4. Used technology only when permitted: *${formValues.value[3].grade}*
${formValues.value[3].comments ? '> Comment: ' + formValues.value[3].comments : ''}
${comments.value ? '\n_Other comments: ' + comments.value + '_' : ''}`
})

const reset = () => {
  formValues.value = [{} as FormEntry, {} as FormEntry, {} as FormEntry, {} as FormEntry]
  comments.value = ''
}

const formComplete = computed((): boolean => {
  return formValues.value.every((formval: FormEntry) => formval.grade !== undefined)
})
</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center mb-5">
      <router-link
        :to="{
          name: 'GroupOverview'
        }"
      >
        <sf-button :icon="'bi-arrow-left-short'">Back</sf-button>
      </router-link>

      <span>({{ currStudent + 1 }}/{{ group.members.length }})</span>

      <router-link
        :to="{
          name: 'ManageGroup',
          params: { idx: groupIndex }
        }"
      >
        <sf-button :icon="'bi-pen'" icon-right>Edit</sf-button>
      </router-link>
    </div>

    <div class="mb-20" v-if="group.members.length > 0">
      <div class="w-full text-center text-2xl font-bold mb-3">
        {{ group.members[currStudent].name }}
      </div>
      <div class="mb-5">
        <form-item
          v-model="formValues[0].grade"
          @update:selectedLetter="handleSelectedLetter"
          :header="'Started and completed assignments'"
        ></form-item>
        <textarea
          v-model.lazy="formValues[0].comments"
          class="rounded w-full border p-2"
          rows="1"
        ></textarea>
      </div>
      <div class="mb-5">
        <form-item v-model="formValues[1].grade" :header="'Contributed to group work'"></form-item>
        <textarea
          v-model="formValues[1].comments"
          class="rounded w-full border p-2"
          rows="1"
        ></textarea>
      </div>
      <div class="mb-5">
        <form-item
          v-model="formValues[2].grade"
          :header="'Respected other\'s space and belongings'"
        ></form-item>
        <textarea
          v-model="formValues[2].comments"
          class="rounded w-full border p-2"
          rows="1"
        ></textarea>
      </div>
      <div class="mb-5">
        <form-item
          v-model="formValues[3].grade"
          :header="'Used technology only when permitted'"
        ></form-item>
        <textarea
          v-model="formValues[3].comments"
          class="rounded w-full border p-2"
          rows="1"
        ></textarea>
      </div>

      <div class="mt-5">
        <div class="text-center">Other comments</div>
        <textarea v-model="comments" class="rounded w-full border p-2" rows="4"></textarea>
      </div>

      <div
        class="fixed left-8 right-8 bottom-5 flex flex-row justify-between bg-gray-100 rounded p-2"
      >
        <sf-button
          @click="(currStudent = Math.max(0, currStudent - 1)), reset()"
          :disabled="currStudent === 0"
          icon="bi-arrow-left"
        >
          Prev
        </sf-button>

        <a :href="'https://wa.me/' + cleanedNumber + '?text=' + encodeURI(formResponse)"
          ><sf-button
            icon="bi-whatsapp"
            :class="formComplete ? 'bg-green-400 text-white' : 'bg-green-200'"
            :disabled="!formComplete"
          >
            Share
          </sf-button></a
        >

        <sf-button
          @click="(currStudent = Math.min(group.members.length - 1, currStudent + 1)), reset()"
          icon="bi-arrow-right"
          :disabled="currStudent === group.members.length - 1"
          icon-right
        >
          Next
        </sf-button>
      </div>
    </div>
    <div v-else>Add some students to the group</div>
  </div>
</template>

<style scoped lang="scss"></style>
