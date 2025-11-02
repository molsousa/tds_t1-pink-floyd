function validateForm(){
    const nome = document.getElementById("usuario").value;
    const nota_banda = document.getElementById("nota_band").value;

    if(!nome){
        alert("O campo 'Usuario' é obrigatório!");
        return false;
    }

    if(nota_banda === "1"){
        alert("Não é permitido odiar a banda!!!");
        return false;
    }

    return true;
}