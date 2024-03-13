<template>
    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        <TransitionGroup name="list">
            <PostItem v-for="post in posts" :key="post.id" :post="post"/>
        </TransitionGroup>
    </div>
</template>

<script setup>
import PostItem from './PostItem.vue';

const props = defineProps({
    posts: {
        type: Array,
        required: true
    },
})

</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>