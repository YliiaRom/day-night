document.addEventListener("DOMContentLoaded", function() {

VanillaTilt.init(document.querySelectorAll(".sci li a"), {
  max: 25,
  speed: 400,
  glare: true
});

let list = document.querySelectorAll('.sci li');
let bg = document.querySelector('.switch3d');

list.forEach(element => {
  element.addEventListener("mouseenter", function(event) {
    let color = event.target.style.getPropertyValue('--clr');
    bg.style.backgroundColor = color;
  })
  
  element.addEventListener("mouseleave", function(event) {
    bg.style.backgroundColor = '#fff';
  })
})
});