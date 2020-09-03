import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AgregarCategoria = ({setCategorias}) => {
    
    const [categoria, setCategoria] = useState('');

    const handleChange = e => {
        setCategoria(e.target.value);    
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        setCategorias( (cat) => [categoria, ...cat] );
        setCategoria('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='categoria'>Categoria</label>
                <input 
                    type='text'
                    value={categoria}
                    id='categoria'
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AgregarCategoria
