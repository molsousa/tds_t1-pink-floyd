// Funcao para validar formulário
function validateForm(){
    const nome = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const fav_alb = document.getElementById("fav_alb").value;
    const nota_banda = document.getElementById("nota_band").value;

    // Alertas de vários casos de não preenchimentos
    if(!nome){
        alert("O campo 'Usuario' é obrigatório!");
        return false;
    }

    if(!email){
        alert("O campo 'Email' é obrigatório!");
        return false;
    }

    if(fav_alb === "---"){
        alert("É necessário escolher um álbum!");
        return false;
    }

    if(nota_banda === "1"){
        alert("Não é permitido odiar a banda!!!");
        return false;
    }

    // retorna verdadeiro se o formulário está com os campos obrigatórios preenchidos
    return true;
}

// Arrays de itens para álbuns
const albuns = ["---", "The Piper at the Gates of Dawn", "A Saucerful of Secrets", "More", "Ummagumma",
    "Atom Heart Mother", "Meddle", "Obscured by Clouds", "The Dark Side of the Moon",
    "Wish You Were Here", "Animals", "The Wall", "The Final Cut", "A Momentary Lapse of Reason",
    "The Division Bell", "The Endless River"
]

const fav_alb = document.getElementById("fav_alb");

albuns.forEach( option => {
    const newOption = document.createElement("option"); 
    newOption.value = option.toLowerCase().replace(/\s+/g, "-"); 
    newOption.textContent = option; 
    fav_alb.appendChild(newOption); 
});

// function arrow, no caso, da alerta quando clica na nota
const getValor = () => alert('Nota: '+document.getElementById("nota_band").value);