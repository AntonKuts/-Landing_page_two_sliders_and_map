
// START MAIN SLADER

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var dots = document.querySelectorAll('.dot');
var slideInterval = setInterval(autoSlide, 3000);

// auto
function autoSlide() {
  clearSlide();
  currentSlide = (currentSlide+1)%slides.length;
  nextSlide(currentSlide);
}

// arrows
document.getElementById('right').onclick = function() {
  clearSlide();
  currentSlide = (currentSlide+1)%slides.length;
  nextSlide(currentSlide);
}

document.getElementById('left').onclick = function() {
  clearSlide();
  if (currentSlide == 0){
    currentSlide = slides.length-1;
  }
  else {
    currentSlide = currentSlide-1;
  }
  nextSlide(currentSlide);
}

// dots
document.getElementById('dot1').onclick = function() {
  clearSlide();
  currentSlide = 0;
  nextSlide(currentSlide);
}

document.getElementById('dot2').onclick = function() {
  clearSlide();
  currentSlide = 1;
  nextSlide(currentSlide);
}

document.getElementById('dot3').onclick = function() {
  clearSlide();
  currentSlide = 2;
  nextSlide(currentSlide);
}

function clearSlide() {
  slides[currentSlide].className = 'slide';
  dots[currentSlide].className = 'dot';
}

function nextSlide(currentSlide) {
  slides[currentSlide].className = 'slide showing';
  dots[currentSlide].className = 'dot dot-active';
}

// END MAIN SLADER

// START MINI SLADER

// change arrows
document.getElementById('left-mini').onmouseenter = function() {
  document.getElementById('left-mini-arrow').className = 'arrow-mini display-none';
}

document.getElementById('left-mini').onmouseleave = function() {
  document.getElementById('left-mini-arrow').className = 'arrow-mini';
}

document.getElementById('right-mini').onmouseenter = function() {
  document.getElementById('right-mini-arrow').className = 'arrow-mini display-none';
}

document.getElementById('right-mini').onmouseleave = function() {
  document.getElementById('right-mini-arrow').className = 'arrow-mini';
}


// arrows
let count = 1;
let countForBig = 0;

document.getElementById('right-mini').onclick = function() {
  if (count == 1) {
    count = 3
  } else {
    count = count - 1
  }
  nextSlideMini(count)
}

document.getElementById('left-mini').onclick = function() {
  if (count == 3) {
    count = 1
  } else {
    count = count + 1
  }
  nextSlideMini(count)
}

function nextSlideMini(count) {
  if (count == 1) {
    document.getElementById('img-mini-slader1').style.backgroundImage = 'url(img/slider1.jpg)';
    document.getElementById('img-mini-slader2').style.backgroundImage = 'url(img/slider2.jpg)';
    document.getElementById('img-mini-slader3').style.backgroundImage = 'url(img/slider3.jpg)';
  }
  if (count == 2) {
    document.getElementById('img-mini-slader1').style.backgroundImage = 'url(img/slider2.jpg)';
    document.getElementById('img-mini-slader2').style.backgroundImage = 'url(img/slider3.jpg)';
    document.getElementById('img-mini-slader3').style.backgroundImage = 'url(img/slider1.jpg)';
  }
  if (count == 3) {
    document.getElementById('img-mini-slader1').style.backgroundImage = 'url(img/slider3.jpg)';
    document.getElementById('img-mini-slader2').style.backgroundImage = 'url(img/slider1.jpg)';
    document.getElementById('img-mini-slader3').style.backgroundImage = 'url(img/slider2.jpg)';
  }
}

// big img
document.getElementById('img-mini-slader1').ondblclick = function() {
  document.getElementById('big-img').style.backgroundImage = 'url(img/slider' + count + '.jpg)';
  document.getElementById('big-img').className = '';
}

document.getElementById('img-mini-slader2').ondblclick = function() {
  countForBig = 0;
  countForBig = count + 1;
  if (countForBig == 4) {countForBig = 1};
  document.getElementById('big-img').style.backgroundImage = 'url(img/slider' + countForBig + '.jpg)';
  document.getElementById('big-img').className = '';
}

document.getElementById('img-mini-slader3').ondblclick = function() {
  countForBig = 0;
  countForBig = count + 2;
  console.log(countForBig);
  if (countForBig == 4) {countForBig = 1};
  if (countForBig == 5) {countForBig = 2};
  console.log(countForBig);
  document.getElementById('big-img').style.backgroundImage = 'url(img/slider' + countForBig + '.jpg)';
  document.getElementById('big-img').className = '';
}

// close big img by Escape
document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key == "Escape" || evt.key == "Esc");
  } else {
    isEscape = (evt.keyCode == 27);
  }
  if (isEscape) {
    document.getElementById('big-img').className = 'display-none';
  }
};

// END MINI SLADER
