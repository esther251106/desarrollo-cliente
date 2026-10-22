const listaPalabras = (array, idLista) => {
    const ul = document.getElementById(idLista);
    ul.innerHTML = "";

    array.forEach(palabra => {
        const li = document.createElement("li");
        li.textContent = palabra;
        ul.appendChild(li);
    });
};

const contarPalabras = array => {
    const mapa = new Map();
    array.forEach(palabra => {
        mapa.set(palabra, (mapa.get(palabra) || 0) + 1);
    });
    return mapa;
};

let palabra = prompt("dime una palabra");
const lista = [];

while (palabra != "" && palabra != null) {
    lista.push(palabra);
    palabra = prompt("dime otra palabra");
}

const recuento = contarPalabras(lista);

listaPalabras(lista, "listaOriginal");
listaPalabras(
    [...recuento].map(([palabra, veces]) => `${palabra}: ${veces}`),
    "listaRecuento"
);