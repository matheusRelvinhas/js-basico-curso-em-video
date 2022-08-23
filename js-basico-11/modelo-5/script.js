let num = document.getElementById('number');
let tab = document.getElementById('num-tab');
let res = document.getElementById('res');
let numbers = [];

function isNumber(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, list) {
  if(list.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar () {
  if(isNumber(num.value) && !inList(num.value, numbers)) {
    numbers.push(Number(num.value))
    tab.innerHTML = ''
    for (i = 0; i < numbers.length; i++) {
      let item = document.createElement('option')
      item.text = `Número ${numbers[i]} adicionado!`
      tab.appendChild(item)
      res.innerHTML = ''
    }
  } else {
    window.alert('[ERRO] Número deve ser entre 0 e 100, ou já está na lista!')
  }
  num.value = ''
  num.focus()
};

function finalizar () {
  if (numbers.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let total = numbers.length
    let maior = numbers[0]
    let menor = numbers[0]
    let soma = 0
    for (let index in numbers) {
      soma += numbers[index]
      if(numbers[index] > maior){
        maior = numbers[index]
      }
      if(numbers[index] < menor){
        menor = numbers[index]
      }
    }
    let media = soma / total
    res.innerHTML = ''
    res.innerHTML += `<p>Ao total temos ${total} números no array.</p>`
    res.innerHTML += `<p>O maior valor é ${maior}</p>`
    res.innerHTML += `<p>O menor valor é ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>`
  }
}

function limpar() {
  numbers = []
  tab.innerHTML = '<option>Adicione um número :)</option>'
  res.innerHTML = ''
}
