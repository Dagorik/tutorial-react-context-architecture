import React from 'react';

export default (Profile) => function Profilehoc() {
    return (<Profile firstName="Primer Nombre" email="prueba@facebook.com" photoUrl={"https://i.stack.imgur.com/l60Hf.png"} />)
}