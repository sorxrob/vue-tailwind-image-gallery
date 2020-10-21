<template>
  <div class="max-w-sm rounded overflow-hidden mx-auto">
    <form @submit.prevent="searchImages" class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          v-model="term"
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search Image Term..."
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(_, { emit }) {
    const term = ref('');

    function searchImages() {
      emit('term-changed', term.value);
    }

    return {
      term,
      searchImages,
    };
  },
};
</script>
