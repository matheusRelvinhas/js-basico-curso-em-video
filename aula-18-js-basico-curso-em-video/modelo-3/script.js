function contar() {
  let numInit = document.getElementById('num-init');
  let numEnd = document.getElementById('num-end');
  let numPass =  document.getElementById('num-pass');
  let res = document.getElementById('res');
  if (numInit.value.length == 0 || numEnd.value.length == 0 || numPass.value.length == 0) {
    window.alert('[ERRO] Faltam informações')
  } else {
    res.innerHTML = 'Contando: '
    let init = Number(numInit.value)
    let end = Number(numEnd.value)
    let pass = Number(numPass.value)
    if (init < end) {
      if (pass < 0) {
        window.alert('[ERROR] Não é possível calcular')
      } else {
        for (i = init; i <= end; i += pass) {
          if (i == end || i > end - pass) {
            res.innerHTML += `${i} \u{1F3C1}`
          } else {
            res.innerHTML += `${i} \u{1F449} `
          }
        }
      }
    } else {
      if (pass > 0) {
        window.alert('[ERROR] Não é possível calcular')
      } else {
        for (i = init; i >= end; i += pass) {
          if (i == end || i < end - pass) {
            res.innerHTML += `${i} \u{1F3C1}`
          } else {
            res.innerHTML += `${i} \u{1F449} `
          }
        }
      }
    }
  }
}