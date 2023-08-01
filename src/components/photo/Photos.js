import React, {useState, useEffect} from 'react';
import axios from 'axios';

const getRandomPhotos = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const Photos = () => {

    // useEffect(callback, [dependencies]);

    // useEffect(function(callback) {
    //     // side-effects

    // }, []);

    const [randomPhotos, setRandomPhotos] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    const handleLoadMorePhotos = ( ) => {
        getRandomPhotos(nextPage).then((images) => {
            console.log(images);
            const newPhotos = [
                ...randomPhotos,
                ...images
            ];
            setRandomPhotos(newPhotos);
            setNextPage(nextPage + 1);
        });
    };

    useEffect(() => {
        // side-effects
        handleLoadMorePhotos();
    }, []);

    return (
        <div>
            <div className="grid-container">
            {randomPhotos.length > 0 && randomPhotos.map((item, index) => (
                <div key={item.id}>
                    <img src={item.download_url} alt={item.author} />
                </div>
            ))}
            </div>
            <div className="load-more">
                <button onClick={handleLoadMorePhotos} className="button-load-more">Load more</button>
            </div>
        </div>
    );
};

export default Photos;