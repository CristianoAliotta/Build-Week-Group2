let counterImage = 0;
let slider = 0;

function turnNextImage() {
    if (counterImage == 0) {
        slider = 203;
    } else if (counterImage == 1) {
        slider = 409;
    } else if (counterImage == 2) {
        slider = 612;
    } else if (counterImage == 3) {
        slider = 816;
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
    document.getElementById("image-1").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-2").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-3").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-4").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-5").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-6").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-7").style.transform = `translateX(-${slider}px)`;
    document.getElementById("image-8").style.transform = `translateX(-${slider}px)`;
}

function sliderDotOne() {
    counterImage = 4;
    turnNextImage();
}

function sliderDotTwo() {
    counterImage = 3;
    turnNextImage();
}