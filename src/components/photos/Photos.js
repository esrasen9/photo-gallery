import React from 'react';

const Photos = ({photos}) => {
    const handleClick = (url) => {
        window.open(url, '_blank');
    }
    return (
        <div className="photo-container">
            {
                photos && photos.map((photo) => {
                    const {url}= photo;
                    const src = photo.src.portrait;
                    return (
                        <img
                            onClick={()=>handleClick(url)}
                            key={photo.id}
                            className="photo" src={src}
                            alt=""/>
                    )
                })
            }
        </div>
    );
}

export default Photos;