<template>
  <div class="input-container ic1">
    <input
        :value="modelValue"
        @input="updateInput"
        id="firstname"
        class="input"
        type="text"
        placeholder=" "/>
    <label for="placeholder" class="placeholder">{{ placeholder }}</label>
  </div>
</template>

<script lang="ts" setup>
interface PropsType {
  modelValue: string
  placeholder: string
}

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
defineProps<PropsType>()

function updateInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>

<style scoped>

.input {
  background-color: #303245;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 14px;
  height: 100%;
  outline: 0;
  padding: 4px 10px 0;
  width: 100%;
}

.placeholder {
  color: gray;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-17px) translateX(-5px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #969696;
}


.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}


</style>
