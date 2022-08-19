function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('img');
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora < 12) {
    msg.innerHTML += '<p>Bom dia!</p>'
    img.src = '/aula-14-js-basico-curso-em-video/modelo-1/img/dia.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora <= 18) {
    msg.innerHTML += '<p>Boa tarde!</p>'
    img.src = '/aula-14-js-basico-curso-em-video/modelo-1/img/tarde.png'
    document.body.style.background = '#b9846f'
  } else {
    msg.innerHTML += '<p>Boa noite!</p>'
    img.src = '/aula-14-js-basico-curso-em-video/modelo-1/img/noite.png'
    document.body.style.background = '#515154'
  };
}



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