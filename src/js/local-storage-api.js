const body = document.querySelector('body');
const checkboxEl = document.querySelector('.input-theme');

export const addDataToLocalStorage = (key, value) => {
  try {
    const normalizedState = JSON.stringify(value);
    localStorage.setItem(key, normalizedState);
  }
  catch(error) {
console.log(error);
  }
}

 export const getDataFromLocalStorage = (key) => {
  try {
const dataLocalStorage = localStorage.getItem(key);
return (dataLocalStorage === null) ? undefined : JSON.parse(dataLocalStorage);
  }
  catch(error) {
console.log(error);
  }
}

export const renderThemePage = () => {
  const dataLocalStorage = getDataFromLocalStorage('theme');
  if (dataLocalStorage === 'dark') {
body.classList.replace('light', 'dark');
checkboxEl.checked = true;
  } else {
    body.classList.replace('dark', 'light');
  }
}