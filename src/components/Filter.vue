<template>
     <div class="p-10 pb-0 flex content-center w-full items-center flex-col">
      <div class=" bg-white w-full max-w-96 flex border-2 border-gray-300" @click="inputRef.focus()">
        <span class="flex items-center content-center w-10 h-10 p-2 border-r-2 border-gray-300">
          <i class="fa-solid fa-magnifying-glass text-gray-300"></i>
        </span>
        <input :value="author" @input="redactingAuthor" ref="inputRef" class="w-full p-2" type="text" placeholder="Filter by author">
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    author: {
        type: String,
        required: true
    }
})

const inputRef = ref(null)
const emit = defineEmits(['replaceAuthor'])
const redactingAuthor = (event) => {
  emit('replaceAuthor', event.target.value)
}

</script>
