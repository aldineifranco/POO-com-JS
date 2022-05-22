class Produto {

    constructor() {
        this.id = 1
        this.arrayProdutos = [];
        this.editId = null;
    }

    salvar(){
        let produto = this.lerDados();
        this.validaCampo(produto)
        console.log(produto);

        if(this.validaCampo(produto)) {
            if(this.editId == null){
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto);
            }
            
        }

        this.listaTabela();
        this.cancelar();
    }

    listaTabela(){
        let tbody = document.querySelector("#tbody");
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();        
        
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].precoProduto;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.svg';

            td_acoes.appendChild(imgEdit);

            imgEdit.setAttribute("onclick", "produto.preparaEdicao ("+ JSON.stringify(this.arrayProdutos[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';

            // setAtribute cria a função de deletar no ícone em Ações.

            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id + ")")

            td_acoes.appendChild(imgDelete);

            td_acoes.classList.add('img');
            td_acoes.classList.add('td:nth-child(4)')
     
        }
    }

    adicionar(produto){
        produto.precoProduto = parseFloat(produto.precoProduto)
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].precoProduto = produto.precoProduto;
            }
        }
    }


    preparaEdicao(dados){
        this.editId = dados.id;

        document.querySelector('#produto').value = dados.nomeProduto;
        document.querySelector('#preco').value = dados.precoProduto;

        document.querySelector('#btn1').innerText = 'Atualizar'
    }

    lerDados(){
        let produto = {}

            produto.id = this.id;
            produto.nomeProduto = document.querySelector("#produto").value;
            produto.precoProduto = document.querySelector("#preco").value;

        return produto;
    }

    validaCampo(produto){
        let msg = '';

        if(produto.nomeProduto === ''){
            msg += '- Informe o nome do Produto \n';
        }
        if(produto.precoProduto === ''){
            msg += '- Informe o preço do Produto \n';
        }

        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    cancelar() {
        document.querySelector("#produto").value = '';
        document.querySelector("#preco").value = '';

        document.querySelector('#btn1').innerText = 'Salvar'
        this.editId = null;
    }

    deletar(id) {

        if(confirm('Deseja realmente deletar o produto ' + id)){
            let tbody = document.querySelector("#tbody");

            for(let i=0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == id){
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }

    }
}

var produto = new Produto();