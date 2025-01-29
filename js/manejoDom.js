const titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);

const button = document.getElementById("cambiar");
//cambiar el contenido de un elemento
button.addEventListener('click', () => {
    titulo.textContent = ("Cambie de texto");
    titulo.style.color = "red";
});


const buttonGenerar = document.getElementById("generarParrafo");

buttonGenerar.addEventListener('click', () => {
    //crear nuevos elementos y añadir al DOM
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo agregado! :)";
    document.body.appendChild(nuevoParrafo);
    
});