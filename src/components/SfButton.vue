<script setup lang="ts">
const props = defineProps<{
  icon?: string
  iconRight?: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="border border-solid py-1.5 px-3 rounded flex items-center cursor-pointer select-none bg-white"
    :disabled="disabled"
    :class="[
      icon && iconRight ? 'flex-row-reverse' : 'flex-row',
      disabled ? 'bg-gray-200 text-gray-200' : ''
    ]"
  >
    <i v-if="icon" :class="['bi ', props.icon, iconRight ? 'pl-2' : 'pr-2']"> </i>
    <span><slot></slot></span>
  </button>
</template>
