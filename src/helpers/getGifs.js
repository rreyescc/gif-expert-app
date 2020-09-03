export const getGifs = async ( categoria ) => {

    //const obtenerImagenesGif = async () => {
        const apiKey = 'msRtlKG1L0ckRTwzSlkaNYZR1fMl3aDP';
        const endPoint = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=5&api_key=${apiKey}`;

        const response = await fetch(endPoint);
        const { data } = await response.json();

        const listaGif = data.map( (d) => ({
            id: d.id,
            title: d.title,
            url: d.images?.original.url
            })  
        );

        return listaGif;

        //setGifs(listaGif);
    //}

}

//export default getGifs;