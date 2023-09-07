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

