function verificar() {
  let= data = new Date()
  let ano = data.getFullYear()
  let formularioAno = document.getElementById('txtano')
  let res = document.getElementById('res')
  if (formularioAno.value.lenght == 0 || Number(formularioAno.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente')
  } else {
    res.innerHTML('<p>oi</p>')
  }
}




//    let formularioSex = document.getElementsByName('radsex')
//let idade = ano - Number(formularioAno.value)
//let genero = ''
//if (formularioSex[0].checked) {
//  genero = 'Homem'
//} else if (formularioSex[1].checked) {
//  genero = 'Mulher'
//}
//res.style.textAlign = 'center'
//res.innerHTML = `Detectamos ${genero} com ${idade} anos`
//}
