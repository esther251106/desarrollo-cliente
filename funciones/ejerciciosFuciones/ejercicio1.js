const listaPalabras = (array, idLista) => {
    const ul = document.getElementById(idLista);
    ul.innerHTML = "";

    array.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra;
        ul.appendChild(li);
    });
};

const quitarRep = array => [...new Set(array)];

const ordenarZA = array =>
    [...array].sort((a, b) => b.localeCompare(a, "es"));

let palabra = prompt("dime una palabra");
const lista = [];

while (palabra != "" && palabra != null) {
    lista.push(palabra);
    palabra = prompt("dime otra palabra");
}
const res = ordenarZA(quitarRep(lista));
listaPalabras(res, "listaNoRep");