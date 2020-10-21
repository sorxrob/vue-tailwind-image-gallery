<template>
  <div class="container mx-auto px-10 p-10">
    <ImageSearch @term-changed="fetchImages" />
    <h1 :class="msgClass" v-if="status === 'loading'">Loading...</h1>
    <h1 :class="msgClass" v-else-if="status === 'error'">{{ error }}</h1>
    <h1 :class="msgClass" v-else-if="status === 'success' && !data.length">No Images Found</h1>
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
    const msgClass = 'text-6xl text-center mx-auto mt-32';

    fetchImages('animals');

    return {
      data,
      fetchImages,
      status,
      msgClass,
    };
  },
};
</script>
