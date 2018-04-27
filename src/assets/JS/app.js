// Форма входа
let login = document.querySelector('.login');
let loginBlock = document.querySelector('.double-button');
let clientBlock = document.querySelector('.client-block');
let searchClient = document.querySelector('.client');
const EscCode  = 27;

login.addEventListener('click', function (event) {
  event.preventDefault();
  loginBlock.classList.add('block-none');
  clientBlock.classList.remove('block-none');
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === EscCode) {
    if (loginBlock.classList.contains("block-none")) {
      loginBlock.classList.remove('block-none');
      clientBlock.classList.add('block-none');
    }
  }
});

// Слайдер
let slideLeftControl = document.querySelector('.slide-left');
let slideRightControl = document.querySelector('.slide-right');
let dotLeft = document.querySelector('.dot-left');
let dotRight = document.querySelector('.dot-right');
let slideContainer = document.querySelector('.slide-container');
let width = document.querySelector('.slide1').clientWidth;

slideLeftControl.addEventListener('click', function (event) {
  event.preventDefault();
  slideContainer.style.left = 0 - width +'px';
  slideLeftControl.classList.remove('control-active');
  slideRightControl.classList.add('control-active');
  dotLeft.classList.remove('dot-active');
  dotRight.classList.add('dot-active');
});

slideRightControl.addEventListener('click', function (event) {
  event.preventDefault();
  slideContainer.style.left = 0 +'px';
  slideLeftControl.classList.add('control-active');
  slideRightControl.classList.remove('control-active');
  dotLeft.classList.add('dot-active');
  dotRight.classList.remove('dot-active');
});

// карточки товаров
const cartGood = document.querySelectorAll('.item_pops_good');
const popsImg = document.querySelectorAll('.img-wrap');
const popsBtn = document.querySelectorAll('.pops_btn-wrap');

for (let i = 0; i < cartGood.length; i++) {
  cartGood[i].addEventListener('mousemove', function () {
    popsImg[i].classList.add('block-none');
    popsBtn[i].classList.remove('block-none');
  });
  
  cartGood[i].addEventListener('mouseout', function () {
    popsImg[i].classList.remove('block-none');
    popsBtn[i].classList.add('block-none');
  });
}

cartGood.forEach(function (z) {
  z
})

// Блок услуг
const btnServices = document.querySelectorAll('.our_services-block');
const serviceContent = document.querySelectorAll('.our_services-content');

for (let i = 0; i < btnServices.length; i++) {
  btnServices[i].onclick = function () {
    for (let j = 0; j < btnServices.length; j++) {
      if (j===i) {
        btnServices[j].classList.add('services_block-active');
        serviceContent[j].classList.remove('block-none');
      } else {
        btnServices[j].classList.remove('services_block-active');
        serviceContent[j].classList.add('block-none');
      }
    }
  }
}

// всплывающая яндекс-карта
const activeMap = document.querySelector('.shot_map');
const map = document.querySelector('.modal-content-map');
const closeMap = map.querySelector('.modal-content-close');

activeMap.onclick = (event) => {
  event.preventDefault();
  map.classList.remove('block-none');
}

closeMap.onclick = (event) => {
  event.preventDefault();
  map.classList.add('block-none');
}
// фома обратной связи
const activeFormSend = document.querySelector('.map_company-btn');
const formSend = document.querySelector('.modal_content--write-us');
const closeFormSend = formSend.querySelector('.modal-content-close');

activeFormSend.onclick = (event) => {
  event.preventDefault();
  formSend.classList.remove('block-none');
}

closeFormSend.onclick = (event) => {
  event.preventDefault();
  formSend.classList.add('block-none');
}
// выход по esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!map.classList.contains("block-none")) {
    map.classList.add("block-none");
    }
    if (!formSend.classList.contains('block-none')) {
      formSend.classList.add('block-none');
    }
  }
});

