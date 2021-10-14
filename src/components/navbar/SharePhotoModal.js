import React,{useContext} from 'react';
import {Modal} from "@material-ui/core";
import {Context} from "../../context/Context";
import ImageUploader from "./image_uploader/ImageUploader";
const SharePhotoModal = () => {
    const {sharePhotoModal,userState} = useContext(Context);
    const {sharePhotoModalOpen,setSharePhotoModalOpen} = sharePhotoModal;

    return (
        <Modal
            open={sharePhotoModalOpen}
            onClose={()=>setSharePhotoModalOpen(false)}
        >
            <ImageUploader setSharePhotoModalOpen={setSharePhotoModalOpen} user={userState.user}/>
        </Modal>
    );
}

export default SharePhotoModal;