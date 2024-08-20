<script setup lang="ts">
import { useFeedbackStore } from '@/stores/feedback'
import { ref, computed } from 'vue'
import FormItem from './FormItem.vue'
import SfButton from './SfButton.vue'
const props = defineProps({
  idx: String
})
const store = useFeedbackStore()

const groupIndex = computed(() => Number(props.idx))
const group = computed(() => store.groups[groupIndex.value])

const currStudent = ref(0)
</script>

<template>
  <div>
    <div class="flex flex-row justify-between mb-5">
      <router-link
        :to="{
          name: 'GroupOverview'
        }"
      >
        <sf-button :icon="'bi-arrow-left-short'">back</sf-button>
      </router-link>

      <sf-button :icon="'bi-pen'" icon-right>Edit class</sf-button>
    </div>

    <div class="h-screen" v-if="group.members.length > 0">
      <div class="text-center text-xl mb-5">{{ group.members[currStudent] }}</div>

      <div class="mb-5">
        <form-item :header="'Started and completed assignments'"></form-item>
        <textarea name="remarks " class="rounded w-full border px-2 py-0.5" rows="1"></textarea>
      </div>
      <div class="mb-5">
        <form-item :header="'Contributed to group work'"></form-item>
        <textarea name="remarks " class="rounded w-full border px-2 py-0.5" rows="1"></textarea>
      </div>
      <div class="mb-5">
        <form-item :header="'Respected other\'s space and belongings'"></form-item>
        <textarea name="remarks " class="rounded w-full border px-2 py-0.5" rows="1"></textarea>
      </div>
      <div class="mb-5">
        <form-item :header="'Used technology only when permitted'"></form-item>
        <textarea name="remarks " class="rounded w-full border px-2 py-0.5" rows="1"></textarea>
      </div>
      <div class="mt-5">
        <div class="text-center">Other comments</div>
        <textarea name="remarks " class="rounded w-full border px-2 py-0.5" rows="3"></textarea>
      </div>

      <div class="fixed left-8 right-8 bottom-8 flex flex-row justify-between">
        <sf-button @click="currStudent = Math.max(0, currStudent - 1)" icon="bi-arrow-left">
          Prev
        </sf-button>

        <sf-button
          @click="currStudent = Math.min(group.members.length - 1, currStudent + 1)"
          icon="bi-arrow-right"
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
