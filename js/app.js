function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (listaAmigos.innerHTML == '') {
        listaAmigos.innerHTML = nomeAmigo.value;
    } else {
        listaAmigos.innerHTML = listaAmigos.innerHTML + '<br>' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}

function sortear(){


}

function reiniciar(){


}