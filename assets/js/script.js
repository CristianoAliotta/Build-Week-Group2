// SLIDER [BRUNO]

let counterImage = 0;
let slider = 0; 

function turnNextImage() {
    if (counterImage == 0) {
        slider = 105;
    } else if (counterImage == 1) {
        slider = 210;
    } else if (counterImage == 2) {
        slider = 320;
    } else if (counterImage == 3) {
        slider = 430;
        document.getElementById("slider-dot-1").style.backgroundColor = "gray";
        document.getElementById("slider-dot-2").style.backgroundColor = "orangered";
    } else {
        slider = 0;
        counterImage = -1;
        document.getElementById("slider-dot-1").style.backgroundColor = "orangered";
        document.getElementById("slider-dot-2").style.backgroundColor = "gray";
    }
    takeImage();
}

function takeImage() {
    counterImage++;
    document.getElementById("image-1").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-2").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-3").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-4").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-5").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-6").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-7").style.transform = `translateX(-${slider}%)`;
    document.getElementById("image-8").style.transform = `translateX(-${slider}%)`;
}

function sliderDotOne() {
    counterImage = 4;
    turnNextImage();
}

function sliderDotTwo() {
    counterImage = 3;
    turnNextImage();
}

let menuIsOpen = false;

function openMenu() {
    if (menuIsOpen == false) {
        menuIsOpen = true;
        document.getElementById("mobile-menu").style.opacity = "1";
        document.getElementById("mobile-menu").style.height = "200px";
        document.getElementById("mobile-menu").style.top = "80px";
    } else {
        menuIsOpen = false;
        document.getElementById("mobile-menu").style.opacity = "0%";
        document.getElementById("mobile-menu").style.height = "0%";
        document.getElementById("mobile-menu").style.top = "150px";

    }
    
}

// ACTIVE MENU DESKTOP

let active = document.getElementsByClassName("active");

window.onscroll = function () {
  for (i = 0; i < active.length; i++) {
    active[i].removeAttribute("id");
  }
  if (window.pageYOffset < 673) { //HOME
    active[0].id = "this-active";
  } else if (window.pageYOffset < 1313) { //ABOUT US
    active[1].id = "this-active";
  } else if (window.pageYOffset < 2000) { //BLOG
    active[2].id = "this-active";
  } else if (window.pageYOffset < 4107) { //MENU
    active[3].id = "this-active";
  } else if (window.pageYOffset < 4776) { // NEWS
    active[4].id = "this-active";
  } else {  //CONTACTS
    active[5].id = "this-active";
    active[5].style.animation = "underline 0.4s linear";
  }
};


let foundEasterEgg = false;

function easterEgg() {
  if (foundEasterEgg == false) {
  document.getElementById("easter-egg").style.opacity = "1";
  document.getElementById("easter-egg").style.transform = "scale(1000%)";
  foundEasterEgg = true;
} else {
  document.getElementById("easter-egg").style.opacity = "0";
  document.getElementById("easter-egg").style.transform = "scale(120%)";
  foundEasterEgg = false;
}

}