import { addDataToLocalStorage, getDataFromLocalStorage } from "./local-storage-api";


export const onCheckboxClick = event => {

  const body = document.querySelector('body');
const checkboxEl = document.querySelector('.input-theme');
if(!body) {
return;
}
// if(!checkboxEl) {
// return;
// }
  if (checkboxEl.checked === true) {
    body.classList.replace('light', 'dark');
    addDataToLocalStorage('theme', 'dark');
  }
  else {
    body.classList.replace('dark', 'light');
    addDataToLocalStorage('theme', 'light');
  }
}