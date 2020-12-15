function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

let toggleIMG=document.getElementById("ArrowButton");
let imageBTN = document.getElementById("Toggle");

let imageToggle = function(){

    if(toggleIMG.alt === "Nav-Toggle"){
        //do stuff
        toggleIMG.src = "DownArrow.Png";
        toggleIMG.alt = "Nav-Toggle2";
    }
    else {
        //do other stuff
       toggleIMG.src = "UpArrow.png";
       toggleIMG.alt = "Nav-Toggle";
    }
}

toogleIMG.addEventListener("click", imageToggle);