function playAudio() {
    let x= document.getElementById("myAudio");
    x.play();
}


function pauseAudio() {
    let x= document.getElementById("myAudio");
    x.pause();
}


const musica = {
  titulo: "Pigs",
  album: "Animals",
  ano: 1979,
  duracao: "11:25"
};


function mostrarMusica() {
  alert(` Música: ${musica.titulo}\nÁlbum: ${musica.album}\nAno: ${musica.ano}\nDuração: ${musica.duracao}`);
}
