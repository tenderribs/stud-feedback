<script setup lang="ts">
const props = defineProps<{
  icon?: String
  iconRight?: Boolean
}>()
</script>

<template>
  <button
    class="border border-solid py-1.5 px-3 rounded flex items-center"
    :class="icon && iconRight ? 'flex-row-reverse' : 'flex-row'"
  >
    <i v-if="icon" :class="['bi ', props.icon, iconRight ? 'pl-2' : 'pr-2']"> </i>
    <span><slot></slot></span>
  </button>
</template>
