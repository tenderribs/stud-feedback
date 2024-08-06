<script setup lang="ts">
import { Ref, ref } from 'vue'
const props = defineProps<{
  header: string
}>()

const letters = ['A', 'B', 'C', 'D']
const selectedLetter: Ref<string | undefined> = ref(undefined)

const clicked = (opt: string) => {
  selectedLetter.value = opt
}
</script>
<template>
  <div class="form-item">
    <span class="form-header">{{ props.header }}</span>
    <div class="form-options">
      <p
        v-for="letter in letters"
        v-bind:key="letter"
        @click="clicked(letter)"
        class="form-option"
        :class="letter == selectedLetter ? 'selected' : ''"
      >
        {{ letter }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.form-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-header {
  font-size: 18px;
}

.form-options {
  width: 100%;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.form-option {
  width: 25%;
  height: 40px;
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
  font-weight: 700;

  background-color: #dfe4ea;

  border: 1px solid #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
}

.selected {
  background-color: #aaaeb4;
}
</style>
