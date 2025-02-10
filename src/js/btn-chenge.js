document.addEventListener('click', changeTextBtn);
const benefitsChangeText = (element) => {
  element.innerHTML === "Order the project" ? element.innerHTML === "more project" : element.innerHTML === "Order the project";
}
const changeTextBtn = (e) => {
const elementTarget = e.target;
if(elementTarget.closest('.benefits-btn span')) {
  const elTarget = elementTarget.closest('.benefits-btn span');
  changeTextEL(elTarget);
}
}
