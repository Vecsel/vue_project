<template>
  <div v-if="posts.length > 0">
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="emit('remove', post.id)"
          @edit="emit('edit', post)"
      />
    </transition-group>
  </div>
  <div
      v-else
      class="empty"
  >
    Список пуст
  </div>

</template>

<script lang="ts" setup>
import PostItem from "@/components/PostItem.vue";
import type {PostType} from "@/types/PostTypes";


interface PropsType {
  posts: PostType[]
}

defineProps<PropsType>()
const emit = defineEmits<{
  (e: 'remove', id: number): void
  (e: 'edit', post: PostType): void
}>()
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translatex(130px);
}

.post-list-move {
  transition: transform 0.4s ease;
}

.empty {
  color: red;
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
}
</style>
