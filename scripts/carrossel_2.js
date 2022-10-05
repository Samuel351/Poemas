// Carrossel do menu

const carrossel = document.getElementById("container");
const imagens = document.querySelectorAll("#container .imagem");
let index = 0;

// Movimentar slider para frente
document.getElementById("frente").addEventListener("click", function(){
    index++;
    if(index > imagens.length - 1)
    {
        index = 0;
    }
    carrossel.style.transform = `translateX(${-index * 330}px)`;
    console.log(index);
});

// Movimentar slider para trás
document.getElementById("tras").addEventListener("click", function(){
    index--;
    if(index <= -1)
    {
        index = imagens.length - 1;
        carrossel.style.transform = `translateX(${-index * 330}px)`;
    }
    else
    {
        carrossel.style.transform = `translateX(${index * -330}px)`;
    }
    console.log(index);
});

function favoritar()
{
    var imagem = document.getElementById("estrela").src;
    var favoritado = '../images/cheio.svg';
    var naofavoritado = '../images/vazio.svg';

    if(imagem == favoritado)
    {
        document.getElementById("estrela").src = naofavoritado;
    }
    else{
        document.getElementById("estrela").src = favoritado;
    }
}
// Favoritar imagens
document.getElementById("favoritar").addEventListener("click", favoritar);
