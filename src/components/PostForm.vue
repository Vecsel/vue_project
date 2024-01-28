<template>
  <div>
    <div class="close">
      <my-button @click="emit('close')">X</my-button>
    </div>
    <div class="title">{{ editable ? 'Редактирование поста' : 'Создание поста' }}</div>

    <my-input
        class="input"
        v-model="post.title"
        type="text"
        placeholder="Название"
    />
    <div class="input">
      <my-text-area
          v-model="post.description"
          type="text"
          placeholder="Описание"
      />
    </div>

    <div class="create">
      <my-button
          @click="createPost"
      >
        {{ editable ? 'Ок' : 'Создать' }}

      </my-button>
    </div>


  </div>

</template>

<script lang="ts" setup>
import {MyInput, MyButton} from "@/components/UI";
import {ref} from "vue";
import type {PostType} from "@/types/PostTypes";
import MyTextArea from "@/components/UI/MyTextArea.vue";

interface PropsType {
  description: string
  title: string
  editable: number
}

const props = defineProps<PropsType>()

const post = ref<Partial<PostType>>({
  title: props.title ?? '',
  description: props.description ?? '',
})

const emit = defineEmits<{
  (e: 'create', posts: PostType): void
  (e: 'close'): void
}>()


const createPost = () => {
  emit('create', post.value as PostType)
}

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  margin-top: 15px;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin-top: 30px;
}

.create {
  align-self: flex-end;
  margin-top: 15px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 150px;
}

.close {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 50px;
}
</style>
