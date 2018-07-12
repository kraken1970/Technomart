// карточки товаров
function cartGoods() {
  const cartGood = document.querySelectorAll(".item_pops_good");
  const popsImg = document.querySelectorAll(".img-wrap");
  const popsBtn = document.querySelectorAll(".pops_btn-wrap");

  for (let i = 0; i < cartGood.length; i++) {
    cartGood[i].addEventListener("mousemove", function() {
      popsImg[i].classList.add("block-none");
      popsBtn[i].classList.remove("block-none");
    });

    cartGood[i].addEventListener("mouseout", function() {
      popsImg[i].classList.remove("block-none");
      popsBtn[i].classList.add("block-none");
    });
  }
}
cartGoods();
