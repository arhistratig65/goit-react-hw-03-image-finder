import axios from "axios";

const baseUrl = 'https://pixabay.com/api';
const apiParams = {
    key: '37679975-c61ca7dd5cf5e93b8af868242',
    q: '',                      
    image_type: 'photo',
    page: 1,                    
    per_page: 12,                  
    orientation: 'horizontal',
    safesearch: true,
}

export const perPage = apiParams.per_page;

export const getApi = async (searchName, page, perPage) => {
  apiParams.q = searchName;
  apiParams.page = page;
  const searchParams = new URLSearchParams(apiParams);
  const Url = baseUrl + '/?' + searchParams.toString();

  const response = await axios.get(Url);
  return response.data;
}

