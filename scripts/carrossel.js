// Carrossel do menu

const carrossel = document.getElementById("container");
const imagens = document.querySelectorAll("#container img");
let index = 0;

function Carrossel()
{
    index++;
    if(index > imagens.length - 1)
    {
        index = 0;
    }
    carrossel.style.transform = `translateX(${-index * 330}px)`;
    console.log(index);
}

setInterval(Carrossel, 1800);

    

