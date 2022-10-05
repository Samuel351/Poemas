
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
}

function start() {
    setInterval(() => {nextImage()}, time);
}

window.addEventListener("load", start)

// Carrossel do menu

const carrossel = document.getElementById("container");
const imagens = document.querySelectorAll("#container .imagem");
let index = 0;

document.getElementById("frente").addEventListener("click", function(){
    index++;
    if(index > imagens.length - 1)
    {
        index = 0;
    }
    carrossel.style.transform = `translateX(${-index * 320}px)`;
    console.log(index);
});

document.getElementById("tras").addEventListener("click", function(){
    index--;
    if(index <= -1)
    {
        index = 3;
        carrossel.style.transform = `translateX(${-index * 320}px)`;
    }
    else
    {
        carrossel.style.transform = `translateX(${index * -320}px)`;
    }
    console.log(index);
});