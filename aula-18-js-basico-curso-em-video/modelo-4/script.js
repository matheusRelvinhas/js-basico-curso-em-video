function tabuada() {
  let num = document.getElementById('num');
  let tab = document.getElementById('res-tab')
  if (num.value == 0) {
    window.alert('Por favor digite um número diferente de 0.')
  } else {
    tab.innerHTML = ''
    let n = Number(num.value)
    for (i = 1; i <= 10; i++) {
      let item = document.createElement('option')
      item.text = `${n} x ${i} = ${n*i}`
      tab.appendChild(item)
    }
  }
}