// Scripts para adição de títulos na tabela

function adicionar()
{
    // Botão de adicionar novo título é escondido
    document.getElementById("adicionar").style.display = "none"; 

    // Criando linha e célula na tabela
    var tbody = document.getElementById("tbody");
    var tr = tbody.insertRow(-1);
    var td = tr.insertCell(0);

    // Botão confirmar
    var button = document.createElement("button"); 
    button.innerHTML = "Confimar";
    button.classList.add("btn2");

    // Botão cancelar
    var button2 = document.createElement("button"); 
    button2.innerHTML = "Cancelar";
    button2.classList.add("btn2");

    // Input field
    var field = document.createElement("INPUT"); 
    field.setAttribute("type", "text");
    field.classList.add("input-field");

    // Inserindo elementos na célula
    td.appendChild(field); 
    td.appendChild(button);
    td.appendChild(button2);

    // Funções anônimas
    button.onclick = function ()
    {
        var titulo = document.querySelector(".input-field").value;
        
        if(titulo == "")
        {
            alert("É necessário um título para o poema!");
        }
        else
        {
            document.getElementById("adicionar").style.display = "";
            
            button.remove();
            button2.remove();
            field.remove();

            td.appendChild(ler(titulo));
        }
    }

    button2.onclick = function ()
    {
        document.getElementById("adicionar").style.display = "";
        tbody.deleteRow(-1);
    }

}

// Cria o título
function ler(titulo)
{   
    var element = document.createElement("a");

    element.innerHTML = titulo;

    element.classList.add("class");

    return element;
}
