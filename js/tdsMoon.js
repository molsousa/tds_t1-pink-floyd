function playAudio() {
  let x = document.getElementById("myAudio");
  x.play();
}

function pauseAudio() {
  let x = document.getElementById("myAudio");
  x.pause();
}

const musica = {
  titulo: "Brain Damage",
  album: "The Dark Side of the Moon",
  ano: 1973,
  duracao: "3:50"
};

function mostrarMusica() {
  alert(` Música: ${musica.titulo}\nÁlbum: ${musica.album}\nAno: ${musica.ano}\nDuração: ${musica.duracao}`);
}
