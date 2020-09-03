import React, { useState } from 'react'
import AgregarCategoria from './components/AgregarCategoria';
import ListaGif from './components/ListaGif';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Goku']);

    return (
        <>
           <h1>Gif Expert App</h1>
           <AgregarCategoria setCategorias={setCategorias} />
            <hr />
            <div className='contenedor'>
                { 
                    categorias.map( categoria => 
                        ( <ListaGif key={categoria} categoria={categoria} />)
                    ) 
                }
            </div>
        </>
    )
};

export default GifExpertApp;

