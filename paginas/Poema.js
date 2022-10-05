let titulos = JSON.parse(localStorage.getItem("title")) || [];

function adicionar()
{
    document.getElementById("adicionar").style.display = "none"; // Botão de adicionar novo título é escondido
    let tbody = document.getElementById("tbody");
    let tr = tbody.insertRow(-1);
    var element = document.createElement("INPUT");
    let td = tr.insertCell(0);

    var button = document.createElement("button");
    button.innerHTML = "confimar";
    var button2 = document.createElement("button"); 
    button2.innerHTML = "cancelar";

    element.setAttribute("type", "text");

    element.classList.add("input-field");

    td.appendChild(element); // Inserindo elementos na célula
    td.appendChild(button);
    td.appendChild(button2);

    // Funções anônimas
    button.onclick = function (){
        
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


            ler(titulo);
        }
    }

    button2.onclick = function (){
        document.getElementById("adicionar").style.display = "";
        tbody.deleteRow(-1);
    }

}

function ler(titulo)
{   
    
        let body = document.getElementById("tbody")

        let tr = body.insertRow(-1);

        let element = document.createElement("a");

        element = tr.insertCell(0);

        element.innerHTML = titulo;

        element.classList.add("class");

        // titulos.push(titulo);
        // localStorage.setItem("title", JSON.stringify(titulos))

    // Criar novo documento HTML

    // Permite escrever e salvar nesse novo documento.
}
