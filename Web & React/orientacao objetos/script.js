/*const pessoa = {nome:'Emerson', idade:'26'};
console.log(pessoa.nome);

const quadrado = {
    base: 10,   // atributos
    altura: 20, //atributos
    calculaArea: function(){return this.base * this.altura},
}

console.log(quadrado.calculaArea()); //CHAMANDO UM METODO*/
const agenda = {
    contatos : [
        {nomes: 'contato1', telefone: 'telefone1', email: 'email1@teste.com'},
        {nomes: 'contato2', telefone: 'telefone2', email: 'email2@teste.com'},
        {nomes: 'contato3', telefone: 'telefone3', email: 'email3@teste.com'},
        {nomes: 'contato4', telefone: 'telefone4', email: 'email4@teste.com'},
],
    adicionar: function(contato){this.contatos.push(contato)}
}
console.log(agenda.contatos);