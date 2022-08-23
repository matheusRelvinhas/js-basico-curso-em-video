function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('img');
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora < 12) {
    msg.innerHTML += '<p>Bom dia!</p>'
    img.src = 'dia.png'
    document.body.style.background = '#e2cd9f'
  } else if (hora <= 18) {
    msg.innerHTML += '<p>Boa tarde!</p>'
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
  } else {
    msg.innerHTML += '<p>Boa noite!</p>'
    img.src = 'noite.png'
    document.body.style.background = '#515154'
  };
}