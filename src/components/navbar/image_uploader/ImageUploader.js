import React, {useState} from 'react';
import {db, storage} from "../../../firebase/firebase";
import {useHistory} from "react-router-dom";
import firebase from "firebase";

const ImageUploader = ({user,setSharePhotoModalOpen}) => {
    const [caption,setCaption] = useState("");
    const [image,setImage] = useState(null);
    const history = useHistory();
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on("state_changed",
            (snapshot) => {console.log(snapshot)},
            (error)=>{
            console.error(error);
            alert(error.message);},
            ()=>{
                storage.ref("images")
                    .child(image.name)
                    .getDownloadURL().then(url => {
                        db.collection("posts").add(
                            {
                                caption,
                                imageUrl: url,
                                username: user.displayName,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp()
                            })
                })
                setSharePhotoModalOpen(false);
                history.push("/explore");
            }
        )
    }

    const handleFileChange = (e)=> {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    return (
        <div className="image-upload-container">
            <h1 className="image-upload-title">Share A New Post 🚀✨</h1>
            <input
                className="image-upload-input"
                onChange={(e)=>setCaption(e.target.value)}
                type="text"
                value={caption}
                placeholder="Enter a caption..."
            />
            <input
                className="image-upload-input"
                type="file"
                onChange={handleFileChange}/>
            <button
                onClick={handleUpload}
                className="image-upload-button">
                Share
            </button>
        </div>
    );
}

export default ImageUploader;