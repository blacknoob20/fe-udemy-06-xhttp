import { subirImagen } from "./http-providers";

const body = document.body;
let inputFile, imgFoto;

const crearHtlm = () => {
    const html = `
    <h1 class="mt-5">Subir Archivos</h1>
    <hr>
    <label>Seleccionar una foto:</label>
    <input type="file" accept="image/png, image/jpeg" />
    <br>
    <img id="foto" src="" class="img-thumbnail" />
    `;

    const div = document.createElement('div');
    
    div.innerHTML = html;
    body.append(div);
    inputFile = document.querySelector('input');
    imgFoto  = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (evt) => {
        const file = evt.target.files[0];
        
        subirImagen(file).then( url => imgFoto.src = url );
    })
}

export const init = () => {
    crearHtlm();
    eventos();
}