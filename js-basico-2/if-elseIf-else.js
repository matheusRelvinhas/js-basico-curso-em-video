/*condicional aninhada*/

let idade = 17;
if (idade < 16) {
  console.log('Não vota')
} else if (idade < 18) {
  console.log('Voto opcional')
} else {
  console.log('Voto obrigatorio')
};

console.log('______________________________');
console.log(' ');

let agora = new Date();
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
  console.log('Bom dia!')
} else if (hora <= 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
};