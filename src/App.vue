<template>
  <div class="container mx-auto px-10 p-10">
    <ImageSearch @term-changed="fetchImages" />
    <h1 class="text-6xl text-center mx-auto mt-32" :class="msgClass" v-if="status === 'loading'">
      <span v-if="status === 'loading'">Loading...</span>
      <span v-else-if="status === 'error'">{{ error }}</span>
      <span v-else-if="status === 'success' && !data.length">No Images Found</span>
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10" v-else>
      <ImageCard :image="image" v-for="(image, idx) in data" :key="idx" />
    </div>
  </div>
</template>

<script>
import ImageCard from './components/ImageCard.vue';
import ImageSearch from './components/ImageSearch.vue';
import usePixabay from './hooks/usePixabay';

export default {
  components: {
    ImageCard,
    ImageSearch,
  },
  setup() {
    const {
      data,
      status,
      fetchImages,
    } = usePixabay();

    fetchImages('animals');

    return {
      data,
      fetchImages,
      status,
    };
  },
};
</script>
