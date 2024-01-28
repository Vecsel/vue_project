<template>
  <div class="wrapper">
    <MyCat/>
  </div>
</template>

<script setup lang="ts">

import MyCat from "@/components/UI/MyCat.vue";
</script>

<style scoped>
.wrapper {
  background: var(--color-black);
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
