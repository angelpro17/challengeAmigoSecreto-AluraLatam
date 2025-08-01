let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        limpiarCaja();
        return;
    }
    
    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    limpiarCaja();
}

function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    listaAmigos.forEach(function(nombre) {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigoSorteado) {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});