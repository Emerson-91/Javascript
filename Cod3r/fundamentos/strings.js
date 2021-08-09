const escola = "Cod3r"
console.log(escola.charAt(4)); //MOSTRA A LETRA QUE ESTA NO INDICE 4
console.log(escola.charAt(5)); // retorna vazio
console.log(escola.charCodeAt(3)); //unicode
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log(escola.substring(0,3));
console.log('escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e')); // SUBSTITUI O 3 PELO E
console.log(escola.replace(/\d/, 'e')); // SUBSTITUI TODOS OS NUMEROS PELO "E"
console.log(escola.replace(/\w/g, 'e')); // SUBSTITUI TODAS AS LETRAS PELO "E"

// CONVERTER UMA STRING COM VIRGULA POR UM ARRAY
console.log('Ana,Maria,Pedro'.split(','));