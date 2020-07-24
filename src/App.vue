<template>
  <div class="container mx-auto mb-10">
    <ImageSearch @term-changed="fetchImages" />
    <h1 :class="infoMessageClass" v-if="isLoading">Loading...</h1>
    <h1 :class="infoMessageClass" v-else-if="error">{{ error }}</h1>
    <h1 :class="infoMessageClass" v-else-if="!images.length">No Images Found</h1>
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
      error,
    } = usePixabay();
    const infoMessageClass = 'text-6xl text-center mx-auto mt-32';

    return {
      images,
      isLoading,
      fetchImages,
      error,
      infoMessageClass,
    };
  },
};
</script>
