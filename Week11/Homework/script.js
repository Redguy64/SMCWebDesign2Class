let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let images = [
    "quokkas1.jpg",
    "quokkas2.jpg",
    "quokkas3.jpg"
]

let images3 = [
    "quokkas1.jpg",
    "quokkas2.jpg",
    "quokkas3.jpg"
]

let images2 = [
    "puppies1.jpg",
    "puppies2.jpg",
    "puppies3.jpg"
]

let images1 = [
    "kitten1.jpg",
    "kitten2.jpg",
    "kitten3.jpg"
]

let images5 = [
    "mountains1.jpg",
    "mountains2.jpg",
    "mountains3.jpg"
]

let images4 = [
    "lake1.jpg",
    "lake2.jpg",
    "lake2.jpg"
]

let images6 = [
    "forest1.jpg",
    "forest2.jpg",
    "forest3.jpg"
]

let counter = 0;


let imgChange = function () {
    counter++;
    if (counter === 3) {
        counter = 0
    }
    carouselIMG.src = images[counter];

    if (subSelect.value === "kittens") {
        counter = 0
        carouselIMG.src = images1[counter];
    }

    if (subSelect.value === "puppies") {
        counter = 0
        carouselIMG.src = images2[counter];
    }

    if (subSelect.value === "quokkas") {
        counter = 0
        carouselIMG.src = images3[counter];
    }

    if (subSelect.value === "lakes") {
        counter = 0
        carouselIMG.src = images4[counter];
    }

    if (subSelect.value === "mountains") {
        counter = 0
        carouselIMG.src = images5[counter];
    }

    if (subSelect.value === "forests") {
        counter = 0
        carouselIMG.src = images6[counter];
    }

}


window.addEventListener("load", function () {
    setInterval(imgChange, 1000);
})

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let categoryUpdate = function () {
    let animSubcats = ["kittens", "puppies", "quokkas"];
    let natureSubcats = ["forests", "mountains", "lakes"];

    subSelect.innerHTML = "";

    if (catSelect.value === "anim") {
        console.log("animals");
        animSubcats.forEach(function (elem) {
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    } else if (catSelect.value === "nature") {
        console.log("nature");
        natureSubcats.forEach(function (elem) {
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}

catSelect.addEventListener("change", categoryUpdate);