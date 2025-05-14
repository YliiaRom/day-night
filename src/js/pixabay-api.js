import axios from "axios";
import { searchImages } from 'pixabay-api';
import { createGalleryItem } from "./render-function";

//переменные 
const fetchGalleryFromPromise = (inputValue, pageValue) => {
  API_KEY = "48215593-063b757550f958811bbabd770";
  API_URL = "https://pixabay.com/api/";
  const searchParam = {
    param : {
      key: API_KEY,
      q: inputValue,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: `${pageValue}`,
      per_page: 13,
    }
  }

  return axios.get(`${API_URL}`, searchParam);
}