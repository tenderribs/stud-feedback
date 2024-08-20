<script setup lang="ts">
import { type Ref, ref } from 'vue'
const props = defineProps<{
  header: string
}>()

const letters = ['A', 'B', 'C', 'D', 'F']
const selectedLetter: Ref<string | undefined> = ref(undefined)

const clicked = (opt: string) => {
  selectedLetter.value = opt
}
</script>
<template>
  <div class="flex flex-col items-center mb-2">
    <span class="text-md mb-1">{{ props.header }}</span>
    <div class="flex flex-row justify-around">
      <p
        v-for="letter in letters"
        v-bind:key="letter"
        @click="clicked(letter)"
        class="px-3 py-1.5 mx-5 rounded font-bold bg-gray-100 border-solid"
        :class="{ selected: letter == selectedLetter }"
      >
        {{ letter }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.selected {
  background-color: #aaaeb4;
}
</style>
