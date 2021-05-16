const chuckNorrisJokes = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() => {
    try {
        const resp = await fetch(chuckNorrisJokes);
    
        if(!resp.ok) throw 'No se pudo realizar la peticion';

        const { icon_url, id, value } = await resp.json();
    
        return { icon_url, id, value };
        
    } catch (error) {
        throw error;
    }

}

export{
    obtenerChiste
}