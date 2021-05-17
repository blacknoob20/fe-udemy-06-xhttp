// Esta sentencia indica que todo lo que se exporte en crud-providers se va a guardar en el objeto CRUD
import * as CRUD from "./js/crud-providers";

const crisId = 604;

// CRUD.getUsuario(1).then(console.log);

// CRUD.insUsuario({
//     "name": "Cristhian",
//     "job": "Developer"
// }).then(console.log);

// CRUD.actUsuario(crisId,{
//     "name": "Cristhian",
//     "job": "PHP Developer"
// }).then(console.log);

CRUD.eliUsuario(crisId).then(console.log);