<template>
  <div class="post">
      <div class="wrapper">
        <div class="title">{{ post.title }}</div>
        <div class="buttons">
          <my-button
              @click="emit('edit')"
          >
            <img alt="Кнопка редактирования" width="20" src="../assets/img/edit.svg">
          </my-button>
          <my-button
              @click="emit('remove')"
          >X
          </my-button>
        </div>
      </div>
      <div class="description">{{ post.description }}</div>
  </div>
</template>

<script lang="ts" setup>
import type {PostType} from "@/types/PostTypes";
import {MyButton} from "@/components/UI";

interface PropsType {
  post: PostType
}

defineProps<PropsType>()
const emit = defineEmits<{
  (e: 'remove'): void
  (e: 'edit'): void
}>()
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: 18px;
  padding: 5px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.26);
  padding-bottom: 10px
}

.description {
  margin-top: 10px;
}

.post {
  padding: 15px;
  border: 1px solid rgba(48, 50, 69, 0.19);
  box-shadow: 2px 2px 6px rgba(48, 50, 69, 0.22);
  margin-top: 15px;
}

.buttons {
  display: flex;
  gap: 10px;
}
</style>
