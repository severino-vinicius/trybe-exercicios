let listaDePessoasAprovadas = [
  'luka.Modrikt@gmail.com',
  'slatan-Omaior@hotmail.com',
  'neynerd-oneymardosnerd@yahoo.com.br',
  'guedes123_amemamemamem@corinthians.com.br'
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviadocom sucesso!`);
}

listaDePessoasAprovadas.forEach((item, posicao, array) => {
  enviarEmail(item);
  console.log(`Sua posição é a de: ${posicao}`);
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
})