class Poema{
    constructor()
    {
        this.id = 0;
        this.arrayTitulos = [];
    }


    // Salva dados e manda para adicionar no vetor
    create()
    {
        let poema = {};
        poema.id = this.id;
        poema.nome = document.getElementById("input-field").value;

        if(this.validarCampos(poema))
        {
            this.arrayTitulos.push(poema);
            this.id++;
        }

        this.read();
        document.getElementById("input-field").value = "";
    }
    
    // Verifica se há campos vazios
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

    // Listagem dos dados
    read()
    {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for(var i = 0; i < this.arrayTitulos.length; i++)
        {
            let tr = tbody.insertRow();
            let td = tr.insertCell();

            td.innerText = this.arrayTitulos[i].nome;

            let div = document.createElement("div");

            let btn1 = document.createElement("button");
            btn1.innerHTML = "Editar";
            btn1.setAttribute("onclick", "poema.edit("+ JSON.stringify(this.arrayTitulos[i]) +")");

            let btn2 = document.createElement("button");
            btn2.innerHTML = "Deletar";
            btn2.setAttribute("onclick", "poema.delete("+ this.arrayTitulos[i].id +")");

            div.appendChild(btn1);
            div.appendChild(btn2);
            td.appendChild(div);
        }
    }

    // Deletar dados
    delete(id)
    {
        if(confirm("deseja mesmo deletar?")){
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
        dados.nome = prompt("Insira novo título");
        
        this.update(dados.id, dados.nome);
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

        this.read();
    }


}

var poema = new Poema();