
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let array = [];

for (let index = 1; index <= 25; index += 1){
    array.push(index);
}
console.log(array);

console.log();

for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
  };

