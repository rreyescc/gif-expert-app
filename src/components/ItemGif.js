import React from 'react'
import PropTypes from 'prop-types'

const ItemGif = ( {title, url} ) => {
    return (
          <div className='animate__animated animate__fadeInUpBig'>
            <img src={url} alt={title} />
            <p className='titulo'>{title}</p>
          </div>          
    )
}

ItemGif.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default ItemGif
