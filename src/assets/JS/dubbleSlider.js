function dubleSlider() {
  const sliderElem = document.querySelector(".scale");
  const thumbMin = document.querySelector(".toggle-min");
  const thumbMax = document.querySelector(".toggle-max");
  const bar = document.querySelector(".bar");
  const minPriceInput = document.querySelector(".min_price--input");
  const maxPriceInput = document.querySelector(".max_price--input");
  let sliderCoords = getCoords(sliderElem);
  let rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;
  let barWidth = bar.offsetWidth;

  let min = parseInt(getComputedStyle(thumbMin).left);
  let max = parseInt(getComputedStyle(thumbMax).left);

  const devider = maxPriceInput.value / max;

  console.log(parseInt(min), parseInt(max));
  console.log("maxInput", maxPriceInput);

  thumbMin.onmousedown = function(e) {
    let thumbCoords = getCoords(thumbMin);
    let shiftX = e.pageX - thumbCoords.left;

    document.onmousemove = function(e) {
      let newLeft = e.pageX - shiftX - sliderCoords.left;

      //если вне слайдера
      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > max - thumbMin.offsetWidth / 2) {
        newLeft = max - thumbMin.offsetWidth / 2;
      }

      min = newLeft;
      thumbMin.style.left = newLeft + "px";
      bar.style.marginLeft = min + "px";
      bar.style.width = barWidth - min + "px";
      minPriceInput.value = parseInt(devider * min);
    };

    document.onmouseup = function() {
      console.log(getCoords(thumbMin));
      console.log(min);
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  thumbMax.onmousedown = function(e) {
    let thumbCoords = getCoords(thumbMax);
    let shiftX = e.pageX - thumbCoords.left;

    document.onmousemove = function(e) {
      let newLeft = e.pageX - shiftX - sliderCoords.left;

      //если вне слайдера
      if (newLeft < min + thumbMin.offsetWidth / 2) {
        newLeft = min + thumbMin.offsetWidth / 2;
      }

      if (newLeft > rangeEnd) {
        newLeft = rangeEnd;
      }
      max = newLeft;
      console.log("RA", rangeEnd);
      thumbMax.style.left = newLeft + "px";
      bar.style.width = max + "px";
      maxPriceInput.value = parseInt(devider * max);
    };

    document.onmouseup = function() {
      console.log(getCoords(thumbMax));
      console.log(max);
      document.onmousemove = document.onmouseup = null;
    };

    return false;
  };

  thumbMin.ondragstart = function() {
    return false;
  };

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
}

dubleSlider();
