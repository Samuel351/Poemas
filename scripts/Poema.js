// Criar, deletar e editar linhas da tabela.
class Poema{
    constructor()
    {
        this.id = 0;
        this.arrayTitulos = [];
    }

    create()
    {
        // Botão de adicionar novo título é escondido
        document.getElementById("adicionar").style.display = "none"; 

        // Criando linha e célula na tabela
        var tbody = document.getElementById("tbody");
        var tr = tbody.insertRow(-1);
        var td = tr.insertCell(0);

        // Input field
        let field = document.createElement("INPUT"); 
        field.setAttribute("type", "text");
        field.classList.add("input-field");

        // Botão confirmar 
        let button = document.createElement("button"); 
        button.classList.add("botao2");
        button.innerHTML = "Confimar";

        // Botão cancelar 
        let button2 = document.createElement("button"); 
        button2.classList.add("botao2");
        button2.innerHTML = "Cancelar";

        // Inserindo elementos na célulaS
        td.appendChild(field); 
        td.appendChild(button);
        td.appendChild(button2);

        button.onclick = function (){
            if(field.value == "")
            {
                alert("Insira um título para o poema");
            }
            else
            {
                poema.adicionar(field.value);
                button.remove();
                button2.remove();
                field.remove();
            }
        }

        button2.onclick = function (){
            tbody.deleteRow(-1);
            document.getElementById("adicionar").style.display = ""; 
        };

    }

    adicionar(nome)
    {
        let poema = {};
        poema.id = this.id;
        poema.nome = nome;

        if(this.validarCampos(poema))
        {
            document.getElementById("adicionar").style.display = "";
            this.arrayTitulos.push(poema);
            this.id++;
        }
        this.read();
    }

    validarCampos(poema){
        if(poema.nome == "")
        {
            alert("Insira um título para o poema!");
            return false;
        }
        else
        {
            return true;
        }    
    }

    read()
    {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(var i = 0; i < this.arrayTitulos.length; i++)
        {
            let tr = tbody.insertRow();
            let td = tr.insertCell();

            // Input field
            let field = document.createElement("INPUT"); 
            field.setAttribute("id", "field-"+this.arrayTitulos[i].id);
            field.setAttribute("type", "text");
            field.classList.add("input-field2");

            field.value = this.arrayTitulos[i].nome;

            field.disabled = true;

            let div = document.createElement("div");
            div.setAttribute("id", "linha");

            let btn1 = document.createElement("button");
            btn1.innerHTML = "Editar";
            btn1.setAttribute("id", "btn1-"+this.arrayTitulos[i].id);
            btn1.classList.add("botao2");

            btn1.setAttribute("onclick", "poema.edit("+ JSON.stringify(this.arrayTitulos[i]) +")");

            let btn2 = document.createElement("button");
            btn2.innerHTML = "Deletar";
            btn2.setAttribute("onclick", "poema.delete("+ this.arrayTitulos[i].id +")");
            btn2.setAttribute("id", "btn2-"+this.arrayTitulos[i].id);
            btn2.classList.add("botao2");

            div.appendChild(btn1);
            div.appendChild(btn2);
            td.appendChild(field);
            td.appendChild(div);
        }
    }

    // Deletar dados
    delete(id)
    {
        if(confirm("Deseja mesmo deletar?")){
            let tbody = document.getElementById("tbody");
       
            for(var i = 0; i < this.arrayTitulos.length; i++){
                if(this.arrayTitulos[i].id == id)
                {
                    this.arrayTitulos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

    // Edição de dados
    edit(dados)
    {
        let field = document.getElementById("field-"+dados.id);
        field.classList.add("input-field");
        field.disabled = false;

        let btn = document.getElementById("btn1-"+dados.id);
        btn.innerHTML = "Atualizar"

        let btn2 = document.getElementById("btn2-"+dados.id);
        btn2.innerHTML = "Cancelar"

        btn.onclick = function (){
            dados.nome = field.value;
            if(poema.validarCampos(dados)){
                poema.update(dados.id, dados.nome);
            }
        }

        btn2.onclick = function(){
            field.disabled = true;
            field.classList.add("input-field");

            poema.read();
        }

        this.bloquearEstado(dados.id);
    }

    // Atualiza os dados
    update(id, nome)
    {
        for(var i = 0; i < this.arrayTitulos.length; i++){
            if(this.arrayTitulos[i].id == id)
            {
                this.arrayTitulos[i].nome = nome;
            }
        }
        this.desbloquearEstado();
        this.read();
    }

    bloquearEstado(id){
        var linhas = document.querySelectorAll("#linha");
        for(var i = 0; i < linhas.length - 1; i++)
        {
            console.log(i);
            if(i != id){
                linhas[i].style.display = "none";
            }   
        }
    }

    desbloquearEstado(id){
        var linhas = document.querySelectorAll("#tbody linha");
        for(var i = 0; i < linhas.length - 1; i++)
        {
            console.log(i);
            if(i != id){
                linhas[i].style.display = "";
            }   
        }
    }
}

var poema = new Poema();

