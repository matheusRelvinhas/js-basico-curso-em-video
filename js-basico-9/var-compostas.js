//estrutura variavel composta

let numbers = [3,1,7,9,5];
console.log(numbers);
console.log(numbers[3]);
console.log(numbers.length);
numbers.sort();
numbers.push(11);
console.log(numbers);
let pos = numbers.indexOf(1);
console.log(pos)

console.log('________________')
console.log('')

//estrutura de repetição com uma variavel composta
//as 2 sao estruturas diferentes com a mesma função

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
  //console.log(`A posição ${i+1} do array é ${numbers[i]}`)
};

console.log('________________')
console.log('')

for(let i in numbers) {
  console.log(numbers[i])
};
