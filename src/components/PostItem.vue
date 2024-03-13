<template>
    <div class="shadow-md bg-white rounded p-2 flex flex-col gap-5 justify-between border-2 border-gray-300 ">
        <div class=" text-blue-400 font-bold  text-lg">{{ post.title }}</div>
        <div class="text-base">{{ post.body }}</div>
        <div class="text-gray-400 text-xs">{{ post.author }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>

</style>