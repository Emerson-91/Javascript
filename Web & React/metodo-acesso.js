class Quadrado{
    constructor(lado, altura){
    //ATRIBUTOS
    this._cor = 'blue'; 
    this.lado = lado;
    this.altura = altura;
  }
    //METODOS
    get cor(){return this._cor;}
    set cor(cor){this._cor = cor;}


}
const quadrado = new Quadrado(3,4);
console.log(quadrado.cor);
quadrado.cor = 'red';
console.log(quadrado.cor);