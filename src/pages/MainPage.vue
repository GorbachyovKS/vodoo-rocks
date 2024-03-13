<template>
    <div>
      <Filter @replaceAuthor="(value) => author = value" :author="author"/>
      <div class="flex items-center justify-center p-10 m-auto" style="max-width: 1920px;">
        <PostsList :posts="postsFiltred"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed,  ref} from 'vue';

  import Filter from '@/components/Filter.vue';
  import PostsList from '@/components/PostsList.vue';
  import { useFetching } from '@/hooks/useFetching';
  
  const author = ref('')
  
  const [posts] = useFetching()

  const postsFiltred = computed(() => {
    return posts.value.filter(post => post.author.toLowerCase().includes(author.value.toLowerCase()))
  })
  
  </script>
  
  <style>
  #app {
    background: rgb(243 244 246 / 1);
    min-height: 100vh;
  }
  
  * {
    outline: none;
  }
  </style>