<template>
  <div class="container mx-auto mb-10">
    <ImageSearch @term-changed="fetchImages" />
    <h1 class="text-6xl text-center mx-auto mt-32" v-if="isLoading">Loading...</h1>
    <h1 class="text-6xl text-center mx-auto mt-32" v-else-if="!images.length">No Images Found</h1>
    <div class="grid grid-cols-3 gap-4" v-else>
      <ImageCard :image="image" v-for="(image, idx) in images" :key="idx" />
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
      images,
      isLoading,
      fetchImages,
    } = usePixabay();

    return {
      images,
      isLoading,
      fetchImages,
    };
  },
};
</script>
