import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../context/Context";

const LoginBackground = () => {
        const {getData} = useContext(Context);
        const [backgroundPhotos,setBackgroundPhotos] = useState([]);

        useEffect(() => {
                getData("views")
                    .then(response => setBackgroundPhotos(response))
                    .catch(error => console.error(error));
        },[])

        const handleClick = (url) => {
                window.open(url, '_blank');
        }
        return (
            <div className="login-background-container">
                    {

                            backgroundPhotos && backgroundPhotos.slice(0,12).map((photo) => {
                                    const {url}= photo;
                                    const src = photo.src.portrait;
                                    return (
                                        <img
                                            className="login-background-image"
                                            onClick={()=>handleClick(url)}
                                            key={photo.id}
                                            src={src}
                                            alt=""/>
                                    )
                            })
                    }
            </div>
        )
}

export default LoginBackground;