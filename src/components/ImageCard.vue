<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img :src="imageFormatted.webformatURL" alt="random" class="w-full" />
    <div class="px-6 py-4">
      <div class="font-bold text-purple-500 text-xl mb-2">Photo by {{ imageFormatted.user }}</div>
      <ul>
        <li><strong>Views:</strong> {{ imageFormatted.views }}</li>
        <li><strong>Downloads:</strong> {{ imageFormatted.downloads }}</li>
        <li><strong>Likes:</strong> {{ imageFormatted.likes }}</li>
      </ul>
    </div>
    <div class="px-6 py-4">
      <span
      v-for="tag in imageFormatted.tags"
      :key="tag"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#{{tag}}</span
      >
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['image'],
  setup(props) {
    const imageFormatted = computed(() => ({
      ...props.image,
      tags: props.image.tags.split(',').map((i) => i.trim()),
      views: props.image.views.toLocaleString(),
      downloads: props.image.downloads.toLocaleString(),
      likes: props.image.likes.toLocaleString(),
    }));

    return {
      imageFormatted,
    };
  },
};
</script>
