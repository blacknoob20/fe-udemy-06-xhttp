const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const {data} = await resp.json();

    return data;
}

const insUsuario = async(usuario) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return (await resp.json());
}

const actUsuario = async(id, usuario) => {
    const resp = await fetch(`${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return (await resp.json());
}

const eliUsuario = async(id) => {
    const resp = await fetch(`${urlCRUD}/${id}`, { method: 'DELETE' });

    return (resp.ok? 'Borrado': 'No se pudo borrar');
}

export{
    getUsuario,
    insUsuario,
    actUsuario,
    eliUsuario
}