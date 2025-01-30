import { onCheckboxClick } from "./checkbox-click.js";
import { renderThemePage } from "./local-storage-api.js";

const body = document.querySelector('body');
const checkboxEl = document.querySelector('.input-theme');




function clickCheckbox () {
  if(!checkboxEl) {
    return
  } else {
    checkboxEl.addEventListener('click', onCheckboxClick);
  }
}
clickCheckbox();
document.addEventListener('DOMContentLoaded', renderThemePage)