import { ref } from 'vue';

export default function usePixabay() {
  const images = ref([]);
  const isLoading = ref(true);
  const error = ref(null);
  const key = process.env.VUE_APP_PIXABAY_API_KEY;

  async function fetchImages(term) {
    error.value = null;
    isLoading.value = true;
    try {
      const res = await fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&orientation=horizontal`);
      const data = await res.json();
      images.value = data.hits;
    } catch (e) {
      error.value = 'An error occurred';
    }
    isLoading.value = false;
  }

  return {
    images,
    isLoading,
    fetchImages,
  };
}
