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
        alert('El amigo ${amigo}' + ' ya se encuentra en la lista')
    }

    amigos.push(amigo);

    inputAmigo.value= "";

    console.log("Array actulizado: ", amigo)
}

