class Produto {

    constructor() {
        this.id = 1
        this.arrayProdutos = [];
    }

    salvar(){
        let produto = this.lerDados();
        this.validaCampo(produto)
        console.log(produto);

        if(this.validaCampo(produto)) {
            this.adicionar(produto);
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

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.svg';

            td_acoes.appendChild(imgDelete);
     
        }
    }

    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
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
    }
}

var produto = new Produto();