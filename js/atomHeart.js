function playAudio() {
    let x= document.getElementById("myAudio");
    x.play();
}


function pauseAudio() {
    let x= document.getElementById("myAudio");
    x.pause();
}


const musica = {
  titulo: "Summer '68",
  album: "Atom Heart Mother",
  ano: 1970,
  duracao: "5:27"
};


function mostrarMusica() {
  alert(` Música: ${musica.titulo}\nÁlbum: ${musica.album}\nAno: ${musica.ano}\nDuração: ${musica.duracao}`);
}
