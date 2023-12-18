let szamok = [];

function hozzaad() {
    let inputElem = document.getElementById("szamInput");
    let szam = parseFloat(inputElem.value);

    if (!isNaN(szam)) {
        szamok.push(szam);
        kiir();
        inputElem.value = "";
    } else {
        alert("Érvénytelen szám!");
    }
}

function kiir() {
    let listaElem = document.getElementById("szamokLista");
    listaElem.innerText = "Számok: " + szamok.join(", ");
}

function megjelenitLegkisebb() {
    if (szamok.length > 0) {
        let legkisebbSzam = Math.min(...szamok);
        alert("Legkisebb szám: " + legkisebbSzam);
    } else {
        alert("Nincs hozzáadott szám.");
    }
}

function megjelenitLegnagyobb() {
    if (szamok.length > 0) {
        let legnagyobb = Math.max(...szamok);
        alert("legnagyobb szám: " + legnagyobb);
    } else {
        alert("Nincs hozzáadott szám.");
    }
}

