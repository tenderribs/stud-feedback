<script setup lang="ts">
type Group = {
  name: string
  members: string[]
}

const groups: Group[] = [
  {
    name: 'lmao',
    members: ['arian', 'colin']
  }
]
</script>

<template>
  <div class="container">
    <p style="margin-bottom: 10px">Put each student's name on a separate line</p>

    <div v-for="(group, index) in groups" v-bind:key="index">
      <p class="name">{{ group.name }}</p>
      <textarea v-model.lazy="group.members" placeholder="Jane\n, Joe\n, Jeff"></textarea>
    </div>
  </div>
</template>

<style scoped lang="scss">
.name {
  font-size: 20px;
}
</style>
