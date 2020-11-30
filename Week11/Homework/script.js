let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let images1 = [
    "kitten1.jpg",
    "kitten2.jpg",
    "kitten3.jpg"
]

let images2 = [
    "puppies1.jpg",
    "puppies2.jpg",
    "puppies3.jpg"
]

let images3 = [
    "quokkas1.jpg",
    "quokkas2.jpg",
    "quokkas3.jpg"
]

let images4 = [
    "lake1.jpg",
    "lake2.jpg",
    "lake2.jpg"
]

let images5 = [
    "mountain1.jpg",
    "mountain2.jpg",
    "mountain3.jpg"
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

    if (subSelect.value === "kittens") {
        carouselIMG.src = images1[counter];
    }
    else if (subSelect.value === "puppies") {
        carouselIMG.src = images2[counter];
    }
    else if (subSelect.value === "quokkas") {
        carouselIMG.src = images3[counter];
    }
    else if (subSelect.value === "lakes") {
        carouselIMG.src = images4[counter];
    }
    else if (subSelect.value === "mountains") {
        carouselIMG.src = images5[counter];
    }
    else if (subSelect.value === "forests") {
        carouselIMG.src = images6[counter];
    }

}

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
    } 
    else if (catSelect.value === "nature") {
        console.log("nature");
        natureSubcats.forEach(function (elem) {
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}



window.addEventListener("load", function () {
    categoryUpdate();
    setInterval(imgChange, 3000);
})
catSelect.addEventListener("change", categoryUpdate);
subSelect.addEventListener("change", function(){
    counter = 0;
})