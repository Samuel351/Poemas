var time = 3000, imageindex = 0;
var images = document.querySelectorAll("#carrossel div");
var favorites = JSON.parse(localStorage.getItem("Favoritos")) || [];
var executado = false;

// Ação da seta esquerda
document.getElementById("botao1").addEventListener("click", function(){

    images[imageindex].classList.remove("selected");

    imageindex--;

    if(imageindex <= -1)
    {
        imageindex = images.length - 1;
    }

    images[imageindex].classList.add("selected");
    console.log(`Posição do carrosel: ${imageindex}`);
});

// Ação da seta direita
document.getElementById("botao2").addEventListener("click", function(){

    images[imageindex].classList.remove("selected");

    imageindex++;

    if(imageindex >= images.length)
    {
        imageindex = 0;
    }

    images[imageindex].classList.add("selected");
    console.log(`Posição do carrosel: ${imageindex}`);

});

// Ação do botão de favoritar
document.getElementById("favorite").addEventListener("click", Favoritar);

function Favoritar()
{
    const imageFavoritada = document.querySelector(".selected .imagens").src;
    const index = favorites.indexOf(imageFavoritada);
    if(index != -1)
    {
        favorites.splice(index, 1);
        document.querySelector(".selected .estrela").src = "../images/vazio.svg";
    }
    else
    {
        favorites.push(imageFavoritada);
        document.querySelector(".selected .estrela").src = "../images/cheio.svg";
    }

    localStorage.setItem('Favoritos', JSON.stringify(favorites));
}


// Ver quais itens estão salvos no array
function pegarEstado()
{
    const imagens = document.querySelectorAll("#carrossel .imagens");
    const estrelas = document.querySelectorAll("#carrossel .estrela");
    
    for(var i = 0; i < imagens.length; i++)
    {
        const index = favorites.indexOf(imagens[i].src);
        if(index != -1)
        {
            console.log("Esse item existe no array!");
            estrelas[i].src = "../images/cheio.svg";
        }
        else
        {
            console.log("Esse item não existe no array!");
            estrelas[i].src = "../images/vazio.svg";
        }
    }
}

window.addEventListener("load", pegarEstado);


