import axios from "axios";

// key: '37679975-c61ca7dd5cf5e93b8af868242'

const baseUrl = 'https://pixabay.com/api';
const apiParams = {
    key: '37679975-c61ca7dd5cf5e93b8af868242',
    q: '',                        // search 
    image_type: 'photo',
    page: 1,                      // current page default
    per_page: 12,                  // item on page default (set in App)
    orientation: 'horizontal',
    safesearch: true,
}

export const perPage = apiParams.per_page;

export const getApi = async (searchName, page, perPage) => {
  apiParams.q = searchName;
  apiParams.page = page;
  const searchParams = new URLSearchParams(apiParams);
  const Url = baseUrl + '/?' + searchParams.toString();
 
  console.log('page', apiParams.page);

  const response = await axios.get(Url);
  return response.data;
}

