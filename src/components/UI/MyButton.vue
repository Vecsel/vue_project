<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.btn {
  background-color: var(--secondary-color);
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 15px;
  min-height: 35px;
  text-align: center;
  width: 100%;
  max-height: 42px;

  &:active {
    background-color: #06b;
  }

  &:hover {
    background-color: #06b;
  }
}

</style>
