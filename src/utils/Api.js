import axios from 'axios';
import { toast } from 'react-toastify';

const KEY = '37679975-c61ca7dd5cf5e93b8af868242';
const URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;


export async function getImage(textValue, page) {
  try {
    const response = await axios(URL, {params:{key:KEY, q:textValue, page:page, per_page:PER_PAGE}} );
    const dataRespons = await response.data;  
    return dataRespons;
  } catch (error) {
      toast.error(`API not faund: ${error.message}`)
          throw new Error(error.message);
  }
}

// export class Api {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.totalHits = 0;
//   }

//   async fetchPost() {
//     const OPTIONS = new URLSearchParams({
//       key: API_KEY,
//       q: this.searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: this.page,
//       per_page: 12,
//     });

//     try {
//       const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
//       this.incrementPage();
//       return response.data;
//     } catch (error) {
//       console.error(error.toJSON());
//     }
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   get hits() {
//     return this.totalHits;
//   }

//   set hits(newTotalHits) {
//     this.totalHits = newTotalHits;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
