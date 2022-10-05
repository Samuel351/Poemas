let time = 3000, index = 0;
let images = document.querySelectorAll("#carrossel img");

function nextImage() {

    images[index].classList.remove("selected");

    index++;

    if(index >= images.length)
    {
        index = 0;
    }

    images[index].classList.add("selected");
}

function start() {
    setInterval(() => {nextImage()}, time);
}

window.addEventListener("load", start)