

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const num1 = 22;
const num2 = 44;
const num3 = 54;

const verificarImpar = num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0;

if (verificarImpar) {
    console.log(true);
}
else {
    console.log(false);
}