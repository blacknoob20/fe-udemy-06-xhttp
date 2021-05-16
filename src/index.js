const chuckNorrisJokes = 'https://api.chucknorris.io/jokes/random';

// fetch hace una peticion a una URL, devuelve una promesa.
fetch(chuckNorrisJokes).then((resp)=>{
    // La funcion json tambien devuleve una promesa
    // resp.json().then(datos => {
    //     console.log(datos.id, datos.value);
    // });
    // Otra manera de hacer
    resp.json().then(({id, value}) => {
        console.log(id, value);
    });
});