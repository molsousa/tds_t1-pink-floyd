//function declaration para tocar o áudio
function playAudio() {
  let x = document.getElementById("myAudio");
  x.play();
}

//function declaration para pausar o áudio
function pauseAudio() {
  let x = document.getElementById("myAudio");
  x.pause();
}

// o objeto contendo informações da música
const musica = {
  titulo: "Pigs",
  album: "Animals",
  ano: 1979,
  duracao: "11:25"
};

//function declaration para o alerta mostrando as informações da música
function mostrarMusica() {
  alert(` Música: ${musica.titulo}\nÁlbum: ${musica.album}\nAno: ${musica.ano}\nDuração: ${musica.duracao}`);
}
