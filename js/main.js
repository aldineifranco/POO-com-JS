class Produto {

    constructor() {
        this.id = 0
        this.nomeProduto = '';
        this.valor = 0;
    }

    adicionar(){
        alert('Produto adicionado');

    }

    excluir(){
        alert('Produto excluído')

    }
}

var produto = new Produto();