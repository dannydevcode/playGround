const titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);

const elementos = document.getElementsByTagName('div');
console.log(elementos);

const subTitulo = document.getElementById("subTitulo");

const buttonSub = document.getElementById("subBtn");

buttonSub.addEventListener('click', () => {
    subTitulo.textContent = ("Subtitulo Cambiado!!!");
    subTitulo.style.color = "blue";
});

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

const contenedor = document.getElementById("contenedor");

const botonGenerarDiv = document.getElementById("generarDiv");
const borrarDiv = document.getElementById('borrarDiv');
botonGenerarDiv.addEventListener('click', () => {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.border = '1px solid black';
    nuevoDiv.style.padding = '10px';
    nuevoDiv.style.margin = '10px 0';
    
    const nuevoParrafo2 = document.createElement('p');
    nuevoParrafo2.textContent = "parrafo dentro del div";
    
    //agregar parrafo al div
    nuevoDiv.appendChild(nuevoParrafo2);
    //agregar div al contenedor
    contenedor.appendChild(nuevoDiv);
    
});
borrarDiv.addEventListener('click', () => {
    if(contenedor.lastChild) {
        contenedor.removeChild(contenedor.lastChild);
    }
});
