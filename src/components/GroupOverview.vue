<script setup lang="ts">
import { useFeedbackStore } from '@/stores/feedback'
import SfButton from './SfButton.vue'
import type { Group } from '@/models/models'
import { computed } from 'vue'

const store = useFeedbackStore()

const groups = computed(() => {
  const copy = store.groups
  return copy.sort((a: Group, b: Group) => a.name.localeCompare(b.name))
})
</script>

<template>
  <div>
    <div class="flex flex-row justify-between">
      <router-link
        :to="{
          name: 'ManageGroup',
          params: { idx: 'new' }
        }"
      >
        <sf-button icon="bi-plus" class="mb-8"> New class </sf-button>
      </router-link>
      <router-link class="text-gray-500" :to="{ name: 'MoreInfo' }">
        <sf-button icon="bi-info-circle " icon-right>Info</sf-button>
      </router-link>
    </div>

    <router-link
      :to="{
        name: 'GroupFeedback',
        params: { idx: index }
      }"
      class="w-full flex flex-row justify-center mb-5 px-5 border border-solid p-5 text-xl rounded"
      v-for="(group, index) in groups"
      v-bind:key="index"
    >
      {{ group.name }}
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
