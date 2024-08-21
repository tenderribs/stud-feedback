<script setup lang="ts">
const props = defineProps<{
  header: string
}>()

const model = defineModel<String>({ required: true })

const letters = ['A', 'B', 'C', 'D', 'F']

const clicked = (option: string) => {
  model.value = option
}
</script>
<template>
  <div class="flex flex-col items-center mb-2">
    <span class="text-md mb-1">{{ props.header }}</span>
    <div class="flex flex-row justify-around">
      <button
        v-for="letter in letters"
        v-bind:key="letter"
        @click="clicked(letter)"
        class="px-3 py-1.5 mx-5 rounded font-bold bg-gray-100 border-solid"
        :class="{ selected: letter == model }"
      >
        {{ letter }}
      </button>
    </div>
  </div>
</template>
<style scoped>
.selected {
  background-color: #aaaeb4;
}
</style>
