class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;    
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, rg, cpf){
        super(nome, idade); //HERANCA
        this.rg = rg;
        this.cpf = cpf;

    }
}
const cidadao = new Cidadao('lucas', 26, '00123', '036110213');
console.log(cidadao instanceof Pessoa);


