// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const pecaDeXadrez = 'Torre';

switch(pecaDeXadrez.toLowerCase()) {
    case 'bispo':
        console.log('A movimentação da peça: '+ pecaDeXadrez +' é Diagonal.');
        break;
    
    case 'torre':
        console.log('A movimentação da peça: '+ pecaDeXadrez +' é Horizontal e Vertical.');
        break;

    case 'cavalo':
        console.log('A movimentação da peça: '+ pecaDeXadrez +' é em formato de L.');
        break;

    case 'rainha':
        console.log('A movimentação da peça: '+ pecaDeXadrez +' é Horizontal, Vertical e Diagonal.');
        break;

    default:
        console.log('A peça de xadrez não existe.');

    }
