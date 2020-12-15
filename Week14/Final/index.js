let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let images1 = [
    "Image1.png",
    "Image2.png"
]

let counter = 0;

let imgChange = function () {
    counter++;
    if (counter === 2) {
        counter = 0
    }
}

window.addEventListener("load", function () {
    setInterval(imgChange, 3000);
})