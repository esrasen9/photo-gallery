import {NavLink} from "react-router-dom";
import {BsPlusSquare, VscSignOut, MdExplore} from "react-icons/all";
import React, {useContext} from "react";
import {Context} from "../../context/Context";

const LoggedInIcons = ({handleSignOut}) => {
    const {sharePhotoModal} = useContext(Context);
    const {setSharePhotoModalOpen} = sharePhotoModal;
    return (
        <>
            <button
                className="nav-route-item nav-plus-button"
                onClick={()=>setSharePhotoModalOpen(true)}>
                <BsPlusSquare
                    size="35"/>
            </button>

            <NavLink className="nav-route-item" to="/explore">
                <MdExplore size="35"/>
            </NavLink>
            <button
                onClick={handleSignOut}
                className="nav-logout-button"
            >
                <VscSignOut
                    className="nav-logout-icon"
                    size="35"/>
            </button>
        </>
    );
}

export default LoggedInIcons;