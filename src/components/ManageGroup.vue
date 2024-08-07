<script setup lang="ts">
import { useFeedbackStore } from '@/stores/feedback'
const store = useFeedbackStore()
</script>

<template>
  <div>
    <p style="margin-bottom: 10px">Put each student's name on a separate line</p>

    <div v-for="(group, index) in store.groups" v-bind:key="index">
      <p class="name">{{ group.name }}</p>
      <textarea v-model.lazy="group.members"></textarea>
    </div>
  </div>
</template>

<style scoped lang="scss">
.name {
  font-size: 20px;
}
</style>
