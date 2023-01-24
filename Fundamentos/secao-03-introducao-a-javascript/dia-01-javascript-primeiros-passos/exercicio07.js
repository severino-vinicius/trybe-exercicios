
// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.


const num1 = 11;
const num2 = 33;
const num3 = 55;

const verificarPar = num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0;

if (verificarPar) {
    console.log(true);
}
else {
    console.log(false);
}
