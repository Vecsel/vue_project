<template>
  <div class="navbar">
    <div @click="toPath">
      <img class="img" alt="котик" width="50" src="../assets/img/cat.svg"/>
    </div>
    <div class="buttons">
      <my-button @click="$router.push('/posts')">
        Посты
      </my-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyButton from "@/components/UI/MyButton.vue";
import {useRouter} from "vue-router";

const router = useRouter()

function toPath() {
  router.push('/')
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  color: white;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.buttons {
  margin-left: auto;
}

.img {
  cursor: pointer;
}
</style>
