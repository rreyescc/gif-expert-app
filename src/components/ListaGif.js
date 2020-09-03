import React from 'react';
import PropTypes from 'prop-types';
import ItemGif from './ItemGif';
import {useFetch} from '../hooks/useFetch'

const ListaGif = ({categoria}) => {

    const { data, loading } = useFetch(categoria);

    return (
        <>
            <h2>{categoria}</h2>
            { loading && <p className='animate__animated animate__flash'>Buscando...</p> }
            <div className='lista'>
                {   
                    data.map( gif => ( 
                        <ItemGif key={gif.id} {...gif} /> 
                        )
                    )
                }   
            </div>
        </>
    )
}

ListaGif.propTypes = {
    categoria: PropTypes.string.isRequired
};

export default ListaGif;
