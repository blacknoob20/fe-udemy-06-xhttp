// Esta sentencia indica que todo lo que se exporte en crud-providers se va a guardar en el objeto CRUD
import * as CRUD from "./js/crud-providers";

CRUD.getUsuario(1).then(console.log);