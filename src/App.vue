<template>
  <div class="wrapper">
    <navbar></navbar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/TheHeader.vue'
</script>

<style>
</style>
