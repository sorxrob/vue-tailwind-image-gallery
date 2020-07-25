import { ref } from 'vue';

export default function usePixabay() {
  const data = ref([]);
  const status = ref('');
  const key = process.env.VUE_APP_PIXABAY_API_KEY;

  async function fetchImages(term) {
    status.value = 'loading';
    try {
      const res = await fetch(`https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&orientation=horizontal`);
      const json = await res.json();
      status.value = 'success';
      data.value = json.hits;
    } catch (e) {
      status.value = 'error';
    }
  }

  return {
    data,
    fetchImages,
    status,
  };
}
