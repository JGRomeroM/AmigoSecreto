// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creamos el array Amigos
let amigos = []
//Funcion para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo")
    const amigo = inputAmigo.value.trim();

    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    if(amigos.includes(amigo)){
        alert(`El amigo ${amigo} ya se encuentra en la lista`);
    }
    amigos.push(amigo);
    inputAmigo.value= "";
    actualizarLista()
}

function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert('No hay amigos. Agrega al menos 1 amigo');
        return;
    }

    const aletorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[aletorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amgio sorteado: <strong>${amigoSorteado}</strong>`;
}