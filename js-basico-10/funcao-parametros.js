function action(n1=0 , n2=0) {
  let soma = n1 + n2
  console.log(soma)
  return soma;
}

let imprimir = action(5,3);

function parImp(n) {
  if (n % 2 == 0) {
    return 'par'
  } else {
    return 'impar'
  }
}

console.log(parImp(imprimir));

let parImpar = function parImp(n) {
  if (n % 2 == 0) {
    return 'par'
  } else {
    return 'impar'
  }
}
  
console.log(parImpar(imprimir));

function fatorial(n) {
  let fat = 1
  for (i = n; i > 1; i--) {
    fat *= i
  }
  return fat
};

let res = fatorial(5);
console.log(res);

function fatorial2(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial2(n-1)
  }
};

console.log(fatorial2(5));