// let titulos = JSON.parse(localStorage.getItem("title")) || [];

function adicionar()
{
    // Botão de adicionar novo título é escondido
    document.getElementById("adicionar").style.display = "none"; 

    // Criando linha e célula na tabela
    let tbody = document.getElementById("tbody");
    let tr = tbody.insertRow(-1);
    let td = tr.insertCell(0);

    // Botão confirmar
    var button = document.createElement("button"); 
    button.innerHTML = "confimar";

    // Botão cancelar
    var button2 = document.createElement("button"); 
    button2.innerHTML = "cancelar";

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

function ler(titulo)
{   
    
        let element = document.createElement("a");

        element.innerHTML = titulo;

        element.classList.add("class");

        return element;

       //  titulos.push(titulo);
       //  localStorage.setItem("title", JSON.stringify(titulos))

    // Criar novo documento HTML

    // Permitir escrever e salvar nesse novo documento.
}
