import React, {useContext, useEffect} from 'react';
import {Context} from "../../context/Context";
import Photos from "./Photos";

const PhotoContainer = () => {
    const {photoState,searchState,getPhotos} = useContext(Context);
    const {search} = searchState;
    const {photos} = photoState;

    useEffect(()=>{
        search === "" ? getPhotos("random") : getPhotos(search);
    },[search])

    return (
        <div className="page home-page">
            <Photos photos={photos}/>
        </div>
    );
}

export default PhotoContainer;