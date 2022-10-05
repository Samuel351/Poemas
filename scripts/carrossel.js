// Carrossel da página inicial
let time = 3000, imageindex = 0;
let images = document.querySelectorAll("#carrossel img");

function nextImage() {

    images[imageindex].classList.remove("selected");

    imageindex++;

    if(imageindex >= images.length)
    {
        imageindex = 0;
    }

    images[imageindex].classList.add("selected");
    console.log(`Posição do carrosel: ${imageindex}`)
}

function start() {
    setInterval(() => {nextImage()}, time);
}

window.addEventListener("load", start)

