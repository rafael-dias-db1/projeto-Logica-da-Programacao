let listaAmigos = document.getElementById('lista-amigos');
let indiceAleatorio;
let nomeSorteado;
let sorteados = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;

    if(sorteados.includes(nomeAmigo)){
        return alert("Esse nome já existe!");
    }

    if (nomeAmigo == "") {
        return alert("Digite um nome!");
    }

    listaAmigos.textContent += `${nomeAmigo} `;
    sorteados.push(nomeAmigo);
    console.log(sorteados);
}

function sortear() {

    if (sorteados.length < 4) {
        return alert("Tenha pelo menos 4 amigos!")
    }
    embaralhar(sorteados)
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < sorteados.length; i++) {
        if (i === sorteados.length - 1) {
            listaSorteio.innerHTML += `${sorteados[i]} -> ${sorteados[0]}<br>`;
        } else {
            listaSorteio.innerHTML += `${sorteados[i]} -> ${sorteados[i + 1]}<br>`;
        }
    }
}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    sorteados = [];
    listaAmigos.textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}