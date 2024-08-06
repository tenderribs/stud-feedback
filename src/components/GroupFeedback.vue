<script setup lang="ts">
import FormItem from '@/components/FormItem.vue'
</script>

<template>
  <div class="container">
    <div>< back</div>

    <input type="text" />

    <form-item :header="'based?'" />
    <form-item :header="'cringe?'" />
    <form-item :header="'goated?'" />
    <form-item :header="'studious?'" />
  </div>
</template>

<style scoped lang="scss">
input {
  font-size: 20px;
  outline: none;
  width: 100%;
}

.form-item {
  padding-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
}
</style>
