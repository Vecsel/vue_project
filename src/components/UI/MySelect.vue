<template>
  <label class="label">
    <select class="select" :value="modelValue" @change="changeOption">
      <option disabled value="">Выберите из списка</option>
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </label>

</template>

<script lang="ts" setup>

interface OptionsType {
  value: string
  name: string
}

interface PropsType {
  modelValue: string,
  options: OptionsType[]
}

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
defineProps<PropsType>()

const changeOption = (event: Event) => {
  emit('update:modelValue',  (event.target as HTMLSelectElement).value)
}

</script>

<style scoped>
body {
  background: #333;
  text-align: center;
}

label {
  width: 250px;
  position: relative;
  display: inline-block;

  &:after {
    content: '▼';
    position: absolute;
    width: 37px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    right: -8px;
    bottom: 8px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    pointer-events: none;
    z-index: 2;
  }

  &:before {
    content: '';
    right: 3px;
    top: 2px;
    width: 37px;
    height: 34px;
    background: var(--secondary-color);
    box-shadow: 1px 1px 4px #3494e0;
    position: absolute;
    pointer-events: none;
    display: block;
    z-index: 1;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  select {
    position: relative;
    box-shadow: 1px 1px 4px rgba(52, 148, 224, 0.07);
    width: 250px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid var(--secondary-color);
    outline: none;
    font-size: 14px;
    padding: 10px 9px;
    margin: 0;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    cursor: pointer;
    height: 38px;
  }
}
</style>
