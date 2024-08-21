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
  return `${student.value.name}'s Daily Report Card

  Started and completed assignments: ${formValues.value[0].grade}
  Contributed to group work: ${formValues.value[1].grade}
  Respected other's space and belongings: ${formValues.value[2].grade}
  Used technology only when permitted: ${formValues.value[3].grade}
  `
})
</script>

<template>
  <div>
    <div class="flex flex-row justify-between mb-5">
      <router-link
        :to="{
          name: 'GroupOverview'
        }"
      >
        <sf-button :icon="'bi-arrow-left-short'">Back</sf-button>
      </router-link>

      <router-link
        :to="{
          name: 'ManageGroup',
          params: { idx: groupIndex }
        }"
      >
        <sf-button :icon="'bi-pen'" icon-right>Edit class</sf-button>
      </router-link>
    </div>

    <div class="h-screen" v-if="group.members.length > 0">
      <div class="text-center text-xl font-bold mb-5">{{ group.members[currStudent].name }}</div>

      <div class="mb-5">
        <form-item
          v-model="formValues[0].grade"
          @update:selectedLetter="handleSelectedLetter"
          :header="'Started and completed assignments'"
        ></form-item>
        <textarea
          v-model.lazy="formValues[0].comments"
          name="remarks "
          class="rounded w-full border px-2 py-0.5"
          rows="2"
        ></textarea>
      </div>
      <div class="mb-5">
        <form-item v-model="formValues[1].grade" :header="'Contributed to group work'"></form-item>
        <textarea
          v-model="formValues[1].comments"
          name="remarks "
          class="rounded w-full border px-2 py-0.5"
          rows="2"
        ></textarea>
      </div>
      <div class="mb-5">
        <form-item
          v-model="formValues[2].grade"
          :header="'Respected other\'s space and belongings'"
        ></form-item>
        <textarea
          v-model="formValues[2].comments"
          name="remarks "
          class="rounded w-full border px-2 py-0.5"
          rows="2"
        ></textarea>
      </div>
      <div class="mb-5">
        <form-item
          v-model="formValues[3].grade"
          :header="'Used technology only when permitted'"
        ></form-item>
        <textarea
          v-model="formValues[3].comments"
          name="remarks "
          class="rounded w-full border px-2 py-0.5"
          rows="2"
        ></textarea>
      </div>

      <div class="mt-5">
        <div class="text-center">Other comments</div>
        <textarea
          v-model="comments"
          name="remarks "
          class="rounded w-full border px-2 py-0.5"
          rows="2"
        ></textarea>
      </div>

      <!-- <p>{{ formResponse }}</p> -->

      <div
        class="fixed left-8 right-8 bottom-5 flex flex-row justify-between bg-gray-100 rounded p-2"
      >
        <sf-button
          @click="currStudent = Math.max(0, currStudent - 1)"
          :disabled="currStudent === 0"
          icon="bi-arrow-left"
        >
          Prev
        </sf-button>

        <a :href="'https://wa.me/' + cleanedNumber + '?text=' + encodeURI(formResponse)"
          ><sf-button
            icon="bi-share"
            class="bg-green-100"
            :disabled="!formValues.every((formval: FormEntry) => formval.grade !== undefined)"
          >
            Share
          </sf-button></a
        >

        <sf-button
          @click="currStudent = Math.min(group.members.length - 1, currStudent + 1)"
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
