// Слайдер
const slideLeftControl = document.querySelector(".slide-left");
const slideRightControl = document.querySelector(".slide-right");
const dotLeft = document.querySelector(".dot-left");
const dotRight = document.querySelector(".dot-right");
const slideContainer = document.querySelector(".slide-container");
const width = document.querySelector(".slide1").clientWidth;

slideLeftControl.addEventListener("click", function(event) {
  event.preventDefault();
  slideContainer.style.left = 0 - width + "px";
  slideLeftControl.classList.remove("control-active");
  slideRightControl.classList.add("control-active");
  dotLeft.classList.remove("dot-active");
  dotRight.classList.add("dot-active");
});

slideRightControl.addEventListener("click", function(event) {
  event.preventDefault();
  slideContainer.style.left = 0 + "px";
  slideLeftControl.classList.add("control-active");
  slideRightControl.classList.remove("control-active");
  dotLeft.classList.add("dot-active");
  dotRight.classList.remove("dot-active");
});

// Блок услуг
const btnServices = document.querySelectorAll(".our_services-block");
const serviceContent = document.querySelectorAll(".our_services-content");

for (let i = 0; i < btnServices.length; i++) {
  btnServices[i].onclick = function() {
    for (let j = 0; j < btnServices.length; j++) {
      if (j === i) {
        btnServices[j].classList.add("services_block-active");
        serviceContent[j].classList.remove("block-none");
      } else {
        btnServices[j].classList.remove("services_block-active");
        serviceContent[j].classList.add("block-none");
      }
    }
  };
}

// всплывающая яндекс-карта
const activeMap = document.querySelector(".shot_map");
const map = document.querySelector(".modal-content-map");
const closeMap = map.querySelector(".modal-content-close");

activeMap.onclick = event => {
  event.preventDefault();
  map.classList.remove("block-none");
};

closeMap.onclick = event => {
  event.preventDefault();
  map.classList.add("block-none");
};
// фома обратной связи
const activeFormSend = document.querySelector(".map_company-btn");
const formSend = document.querySelector(".modal_content--write-us");
const closeFormSend = formSend.querySelector(".modal-content-close");

activeFormSend.onclick = event => {
  event.preventDefault();
  formSend.classList.remove("block-none");
};

closeFormSend.onclick = event => {
  event.preventDefault();
  formSend.classList.add("block-none");
};
// выход по esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!map.classList.contains("block-none")) {
      map.classList.add("block-none");
    }
    if (!formSend.classList.contains("block-none")) {
      formSend.classList.add("block-none");
    }
  }
});
