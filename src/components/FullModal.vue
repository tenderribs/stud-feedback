<script setup lang="ts"></script>

<template>
  <div class="modal">
    <div class="modal-content">
      <div class="close-btn" @click="$emit('close')">×</div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #ffffff;
  padding: 20px;
  margin: 15% auto; /* 15% from the top and centered */
  width: 80%; /* Could be more or less, depending on screen size */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 40px;
  color: #4b4b4b;
}
</style>
