const chuckNorrisJokesUrl = 'https://api.chucknorris.io/jokes/random';
const usuariosUrl         = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudinaryPreset = 'ml_default';
const cloudinaryUrl    = 'https://api.cloudinary.com/v1_1/crguerrero/upload';

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

const subirImagen = async(img) => {
    const formData = new FormData();
    
    formData.append('upload_preset', cloudinaryPreset);
    formData.append('file', img);

    try {
        const resp = await fetch(cloudinaryUrl,{ method: 'POST', body: formData });

        if(resp.ok){
            const cloudResp = await resp.json();
            
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}