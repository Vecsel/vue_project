import {ref, Ref, watch} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";
import {PostType} from "@/types/PostTypes.ts";

interface PostStoreType {
    posts: Ref<PostType[]>
    searchQuery: Ref<string>
    selectedSort: Ref<string>
    isPostsLoading: Ref<boolean>
    isFullLoading: Ref<boolean>
    fetchPost: (nextPage: boolean) => void
    deletePost: (id: number) => void
    createPost: (post: PostType) => void
    editPost: (post: PostType) => void
    setSelectedSorted: (value: string) => void
}


export const usePostStore = defineStore<'post', PostStoreType>('post', () => {
    const posts = ref<PostType[]>([])
    const selectedSort = ref<string>('')
    const searchQuery = ref<string>('')
    const isFullLoading = ref<boolean>(false)
    const offset = ref<number>(0)
    const totalCount = ref<number>(0)
    const isPostsLoading = ref<boolean>(false)


    const fetchPost = async (nextPage = false) => {
        isPostsLoading.value = true
        try {
            if (totalCount.value < offset.value) {
                return
            }
            if (nextPage) {
                offset.value += 10
            }
            const response = await axios.get('http://localhost:8000/api/post/', {
                params: {
                    search: searchQuery.value,
                    ordering: selectedSort.value,
                    limit: 10,
                    offset: offset.value,
                }
            })
            isFullLoading.value = response.data.results.length < 10
            if (nextPage) {
                posts.value = [...posts.value, ...response.data.results]
            } else {
                posts.value = response.data.results
            }
            totalCount.value = response.data.count
        } catch (e) {
            console.log(e)
        } finally {
            isPostsLoading.value = false
        }
    }

    const createPost = async (value: PostType) => {
        try {
            await axios.post('http://localhost:8000/api/post/', value)
            offset.value = 0
            await fetchPost(false)
        } catch (e) {
            console.log(e)
        }
    }

    const deletePost = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/post/${id}/`)
            posts.value = [...posts.value.filter((post) => post.id !== id)]
        } catch (e) {
            console.log(e)
        }
    }

    const editPost = async (post: PostType) => {
        try {
            await axios.put(`http://localhost:8000/api/post/${post.id}/`, post)
            posts.value = [...posts.value.map((elPost) => elPost.id === post.id ? post : elPost)]
        } catch (e) {
            console.log(e)
        }
    }
    const setSelectedSorted = async (value: string) => {
        selectedSort.value = value
        offset.value = 0
        await fetchPost()
    }

    watch(searchQuery, debounce(async () => {
        offset.value = 0
        await fetchPost()
    }))

    function debounce(func: any, timeout = 500) {
        let timer: ReturnType<typeof setTimeout>;
        return (...args: any[]) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }


    return {
        posts,
        isPostsLoading,
        selectedSort,
        setSelectedSorted,
        fetchPost,
        createPost,
        deletePost,
        editPost,
        searchQuery,
        isFullLoading,
    }
})
