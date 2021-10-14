import React, {useContext, useEffect} from 'react';
import logo from "../../images/—Pngtree—cartoon mobile phone camera icon_4483675.png"
import {NavLink, useHistory} from "react-router-dom";
import {VscSignIn} from "react-icons/all";
import {Context} from "../../context/Context";
import LoggedInIcons from "./LoggedInIcons";
import {auth} from "../../firebase/firebase";


const Navbar = () => {
    const {loginModal,userState,searchState,postsState} = useContext(Context);
    const {search,setSearch} = searchState;
    const {user,setUser} = userState;
    const {setLoginModalOpen} = loginModal;
    const history = useHistory();

    const handleSignOut = () => {
        auth.signOut();
        history.push("/");
    }
    useEffect(()=>{
        const subscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //user has logged in
                setUser(authUser);
            }
            else {
                //user has logged out
                setUser(null);
                postsState.setPosts([]);
            }
        });
        return ()=>{
            subscribe();
        }
    },[])
    return (
        <div className="nav-container">
            <NavLink onClick={()=>setSearch("")} className="nav-logo-item" to="/">
                <img
                    className="nav-logo"
                    src={logo}
                    alt="camera-logo"/>
            </NavLink>
            <div className="nav-route-items">
                <NavLink to="/">
                    <input
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search..."
                        className="search-input nav-search-item nav-route-item"
                    />
                </NavLink>
               {
                   user ?
                       (<LoggedInIcons handleSignOut={handleSignOut}/>)
                   : (
                       <NavLink onClick={()=>setLoginModalOpen(true)} className="nav-route-item" to="/login">
                           <VscSignIn size="35"/>
                       </NavLink>)
               }
           </div>
        </div>
    );
}

export default Navbar;