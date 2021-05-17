const chuckNorrisJokesUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl         = 'https://reqres.in/api/users?page=2';

const obtenerUsuarios = async() => {
    const resp = await fetch(usuariosUrl);
    const {data:usuarios} = await resp.json();

    return usuarios;
}

const obtenerChiste = async() => {
    try {
        const resp = await fetch(chuckNorrisJokesUrl);
    
        if(!resp.ok) throw 'No se pudo realizar la peticion';

        const { icon_url, id, value } = await resp.json();
    
        return { icon_url, id, value };
        
    } catch (error) {
        throw error;
    }

}

export{
    obtenerChiste,
    obtenerUsuarios
}