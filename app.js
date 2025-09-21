let listaHTML = document.getElementById('listaAmigos');
let amigos = [] 
function agregarAmigo () {
    document.getElementById('amigo').value;
    
    console.log(document.getElementById('amigo').value);
    if(document.getElementById('amigo').value.trim () == "" || document.getElementById('amigo').value == parseInt(document.getElementById('amigo').value) || listaHTML=='') {
        alert('Por favor, inserte un nombre')
    } else {
        amigos.push(document.getElementById('amigo').value)
    }
    console.log(amigos);
    //Campo para borrar texto después de nombre//
    document.getElementById('amigo').value = " ";
    mostrarLista ();

}
function posicionaleatoria (limitesuperior){
    //
let numeroSecreto =Math.floor(Math.random()*limitesuperior);
return numeroSecreto;
}
function sortearAmigo () {
    if (amigos.length==0) {
        alert('La lista esta vacía,ingrese un nombre valido');
    } else {
        let posicion = posicionaleatoria(amigos.length -1 );
        //alert(`Tu amigo secreto es: ${amigos[posicion]}`);
        document.getElementById('resultado').innerHTML= "Tu amigo secreto es "+amigos[posicion];
        listaHTML.innerHTML='';
        amigos=[];
    }

}
function mostrarLista(){
    listaHTML.innerHTML = "";//limpiar lista
    console.log(listaHTML);
    for (let i = 0; i < amigos.length; i++) {
        //almacenar un elemento 'li' en itemLista
        let itemLista = document.createElement('li');
        console.log(typeof(itemLista));
        //asignar el contenido a la posicion i
        itemLista.textContent = amigos[i];
        //agregar el elemento li
        listaHTML.appendChild(itemLista);
    }
}



