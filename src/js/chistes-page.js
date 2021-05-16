import { obtenerChiste } from "./http-providers";

const body = document.body;
let btnChiste, olChiste;

const crearHtml = () => {
    const div = document.createElement('div');
    const html = `
    <h1 class="mt-5">Chistes de Chuck Norris</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">
    </ol>
    `;

    div.innerHTML = html;
    body.append(div);
}

const eventos = () => {
    olChiste = document.querySelector('ol');
    btnChiste = document.querySelector('button');

    btnChiste.addEventListener('click',async() => {
        btnChiste.disabled = true;
        mostrarChiste(await obtenerChiste());
        btnChiste.disabled = false;
    });
}

const mostrarChiste = (chiste) => {
    const liChiste = document.createElement('li');

    liChiste.innerHTML = `<img src="${chiste.icon_url}" width="32px" height="32px"><br>id: ${chiste.id}<br> valor: ${chiste.value}`;
    liChiste.classList.add('list-group-item');
    olChiste.append(liChiste);
}

export const init = () => {
    crearHtml();
    eventos();
}