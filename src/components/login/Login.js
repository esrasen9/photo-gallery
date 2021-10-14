import React,{useContext,useState} from 'react';
import {Context} from '../../context/Context';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {Modal} from "@material-ui/core";
import LoginBackground from "./LoginBackground";

const Login = () => {

    const {loginModal} = useContext(Context);
    const {loginModalOpen,setLoginModalOpen} = loginModal;
    const [isSignUp,setIsSignUp] = useState(false);
    const [isSignIn,setIsSignIn] = useState(true);

    const toggleSignBox = () => {
        setIsSignIn(!isSignIn);
        setIsSignUp(!isSignUp);
    }

    return (
        <div className="page login-page">
            <div className="login-background-container">
                <LoginBackground/>
                <Modal open={loginModalOpen}
                       onClose={()=>setLoginModalOpen(false)}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description">
                    {
                        isSignUp ?
                            <SignUp toggleSignBox={toggleSignBox}/>
                            :<SignIn toggleSignBox={toggleSignBox}/>
                    }
                </Modal>
            </div>
        </div>
    );
}

export default Login;