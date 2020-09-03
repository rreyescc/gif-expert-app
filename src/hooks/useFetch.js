import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

export const useFetch = ( categoria ) => {

    const [data, setData] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(categoria).then( gifs => {
                setData({
                    data: gifs,
                    loading: false
                });    
        });
    }, [categoria]);

    return data;
}

//export default useFetch;