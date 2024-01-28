<template>
  <div class="modal" v-if="show">
    <div @click.stop class="modal_content form">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const show = defineModel('show', {default: false})
</script>

<style scoped>
.modal {
  z-index: 10000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(119, 119, 119, 0.89);
  position: fixed;
  display: flex;
}

.modal_content {
  position: relative;
  margin: auto;
  background: gray;
  border-radius: 12px;
  min-width: 50px;
  width: 75%;
  min-height: 300px;
  padding: 20px;
}

.form {
  background-color: #15172b;
  border-radius: 8px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  min-width: 250px;
  max-width: 550px;
}
</style>
