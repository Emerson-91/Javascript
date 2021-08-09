/* function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';  //ESTA ENCAPSULADO DENTRO DA FUNCAO
}

const quadrado = new Quadrado(3,4);
quadrado.cor = 'red';
console.log(quadrado.cor);
*/
/*
//FACTORY FUNCTION
function criaQuadrado(base, altura){
    let cor = 'blue';
    return{
        base,
        altura,
        getCor: function(){return cor;}
    };
}
const quadrado = criaQuadrado(3,4);
console.log(quadrado.getCor());
*/
class Quadrado{
  
    constructor(lado, altura){
      let cor = 'blue';
      this.lado = lado;
      this.altura = altura;
      this.getCor = () => { return cor; };
    }
  }
  
  const quadrado = new Quadrado(3,4);
  console.log(quadrado);
  //Quadrado { lado: 3, altura: 4, getCor: [Function], setCor: [Function] }
  console.log(quadrado.getCor());
  //blue
  quadrado.cor = 'red'; //errado! cria um atributo cor a mais no objeto!
  console.log(quadrado.cor);
  //red
  console.log(quadrado.getCor());
  //blue