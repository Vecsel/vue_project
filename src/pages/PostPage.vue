<template>
  <div class="wrapper">
    <my-input
        placeholder="Поиск"
        v-model="store.searchQuery"
    />
    <div>
      <div class="button">
        <div>
          <my-button
              @click="modalVisible = true"
          >
            Создать пост
          </my-button>
        </div>
        <my-select
            :model-value="store.selectedSort"
            @update:model-value="store.setSelectedSorted"
            :options="sortOptions"
        />
      </div>
      <my-modal v-model:show="modalVisible">
        <post-form
            @close="modalVisible = false"
            @create="createPost"
            :title="currentPostEdit.title"
            :editable="currentPostEdit.id"
            :description="currentPostEdit.description"
        />
      </my-modal>
    </div>
    <post-list
        @remove="store.deletePost"
        @edit="editPost"
        :posts="store.posts"
    />
    <div v-if="!store.isPostsLoading && !store.isFullLoading" v-intersection="loadPost"></div>
  </div>
</template>

<script lang="ts" setup>
import PostList from "@/components/PostList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyModal from "@/components/UI/MyModal.vue";
import {usePostStore} from "@/stores/PostStore";
import PostForm from "@/components/PostForm.vue";
import {onMounted, ref, watch} from "vue";
import {PostType} from "@/types/PostTypes.ts";
import {MySelect} from "@/components/UI";

const store = usePostStore()

const modalVisible = ref(false)

const currentPostEdit = ref<Partial<PostType>>({})

function createPost(value: PostType) {
  if (currentPostEdit.value.id) {
    store.editPost({...value, id: currentPostEdit.value.id});
  } else {
    store.createPost(value);
  }
  modalVisible.value = false
}


const sortOptions = ref<any>([
  {value: 'title', name: 'По названию'},
  {value: 'body', name: 'По содержанию'}
])

function loadPost() {
  store.fetchPost(true)
}

function editPost(post: any) {
  currentPostEdit.value = post
  modalVisible.value = true
}

onMounted(() => {
  store.fetchPost(false)

})

watch(modalVisible, (value) => {
  if (!value) {
    currentPostEdit.value = {}
  }
})

</script>

<style scoped>
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  background: #FFF;
  box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;

}

@keyframes shadowPulse {
  33% {
    background: #FFF;
    box-shadow: -24px 0 #15172b, 24px 0 #FFF;
  }
  66% {
    background: #15172b;
    box-shadow: -24px 0 #FFF, 24px 0 #FFF;
  }
  100% {
    background: #FFF;
    box-shadow: -24px 0 #FFF, 24px 0 #15172b;
  }
}

.wrapper {
  margin-top: 50px;
}

.button {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 500px) {
  .button {
    gap: 15px;
    flex-direction: column;
  }
}
</style>
