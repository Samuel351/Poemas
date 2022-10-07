// Scripts para adição de títulos na tabela
let tbody = document.getElementById("tbody");
let tr;
let td;

let button = document.createElement("button"); 
button.classList.add("btn2");

let button2 = document.createElement("button"); 
button2.classList.add("btn2");

class Poema{
    constructor()
    {
        this.id = 0;
        this.arrayTitulos = [];
    }

    salvar(titulo)
    {
        let poema = {};
        poema.id = this.id;
        poema.nome = titulo;
        this.arrayTitulos.push(poema);
        this.id++;
    }

    adicionar()
    {
        var titulo;

        // Botão de adicionar novo título é escondido
        document.getElementById("adicionar").style.display = "none"; 

        // Criando linha e célula na tabela
        tbody = document.getElementById("tbody");
        tr = tbody.insertRow(-1);
        td = tr.insertCell(0);

        // Botão confirmar 
        button.innerHTML = "Confimar";

        // Botão cancelar 
        button2.innerHTML = "Cancelar";

        // Input field
        let field = document.createElement("INPUT"); 
        field.setAttribute("type", "text");
        field.classList.add("input-field");

        // Inserindo elementos na célula
        td.appendChild(field); 
        td.appendChild(button);
        td.appendChild(button2);

        // Botão editar
        let button3 = document.createElement("button"); 
        button3.innerHTML = "Editar";
        button3.classList.add("btn2");

        // Botão excluir
        let button4 = document.createElement("button"); 
        button4.innerHTML = "Remover";
        button4.classList.add("btn2");

        // Recebendo valores do input

        // Funções anônimas
        button.onclick = function ()
        {
            titulo = field.value;
            if(field.value == "")
            {
                alert("É necessário um título para o poema!");
            }
            else
            {
                document.getElementById("adicionar").style.display = "";
                
                button.remove();
                button2.remove();
                field.remove();

                let element = document.createElement("a");

                element.innerHTML = field.value;

                element.classList.add("class");

                let div = document.createElement("div");

                div.appendChild(button3);
                div.appendChild(button4);


                td.appendChild(element);
                td.appendChild(div);
            }
            
            poema.salvar(titulo);
        }

        button2.onclick = function ()
        {
            document.getElementById("adicionar").style.display = "";
            tbody.deleteRow(-1);
        }

        button4.onclick = function(){
            poema.deletar(poema.arrayTitulos[poema.id-1].id);
            console.log(poema.id-1);

            console.log(poema.arrayTitulos[poema.id-1].id);
        }
        console.log(this.arrayTitulos);
    }
}

var poema = new Poema();
