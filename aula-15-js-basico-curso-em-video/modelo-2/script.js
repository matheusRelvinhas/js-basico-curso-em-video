let res = document.querySelector('div#res');
res.style.textAlign = 'center';

function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fAno = document.getElementById('txtano')
  if (fAno.value.length == 0 || Number(fAno.value) > ano ) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fSex = document.getElementsByName('radsex')
    let idade = ano - Number(fAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto' )
    if (fSex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 18) {
        img.setAttribute('src', 'homem-crianca.png' )
      } else if (idade >= 18 && idade < 40) {
        img.setAttribute('src', 'homem-adulto.png' )
      } else {
        img.setAttribute('src', 'homem-velho.png' )
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade < 18) {
        img.setAttribute('src', 'mulher-crianca.png' )
      } else if (idade >= 18 && idade < 40) {
        img.setAttribute('src', 'mulher-adulta.png' )
      } else {
        img.setAttribute('src', 'mulher-velha.png' )
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}






