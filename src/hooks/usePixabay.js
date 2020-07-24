import { ref, onMounted } from 'vue';

export default function usePixabay() {
  const images = ref([]);
  const isLoading = ref(true);
  const error = ref(null);
  const key = process.env.VUE_APP_PIXABAY_API_KEY;

  async function fetchImages(term) {
    isLoading.value = true;
    try {
      const res = await fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&orientation=horizontal`);
      const data = await res.json();
      console.log(data.hits);
      images.value = data.hits;
    } catch (e) {
      error.value = 'An error occurred';
    }
    isLoading.value = false;
  }

  onMounted(() => fetchImages('random'));

  return {
    images,
    isLoading,
    fetchImages,
  };
}
