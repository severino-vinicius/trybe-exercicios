// // Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. 
//    Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
//    Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

// // Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// // Um ângulo será considerado inválido se não tiver um valor positivo.

const a = 10;
const b = 90;
const c = 60;

if (a + b + c === 180) {
    console.log(true + ' Os Angulos serão de um triângulo válido.');
}

else if ( a < 0 || b < 0 || c < 0 ) {
    console.log('O valor inserido não corresponde ao de um triângulo válido, necessário informar um valor positivo.');
}

else if (a + b + c !== 180) {
    console.log(false + ' Os ângulos não serão de um triângulo válido.');
}

else {
    console.log('Error!!');
}