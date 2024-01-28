<template>
  <div class="container ic1">
    <textarea
        :value="modelValue"
        @input="updateInput"
        class="textarea"
        :placeholder="placeholder"/>
  </div>
</template>

<script lang="ts" setup>
interface PropsType {
  modelValue: string
  placeholder: string
}

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
defineProps<PropsType>()

function updateInput(event: any) {
  emit('update:modelValue', event.target.value)
}


</script>

<style scoped>

.textarea {
  background-color: var(--primary-color);
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 14px;
  height: 100%;
  outline: 0;
  padding: 20px 0 0 0;
  width: 100%;
  resize: vertical;
  border-left: 20px solid var(--primary-color);
  max-height: 250px;
  min-height: 250px;
}

.container {
  height: 50px;
  position: relative;
  width: 100%;
}


</style>
