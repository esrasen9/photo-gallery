import React, {useState} from 'react'

export const Context = React.createContext(null);

const Provider = ({children}) => {
    const [search,setSearch] = useState("");
    const [photos,setPhotos] = useState([]);
    const [user,setUser] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginModalOpen,setLoginModalOpen] = useState(true);
    const [sharePhotoModalOpen,setSharePhotoModalOpen] = useState(false);
    const [posts,setPosts] = useState([]);
    const getData = async (query) => {
        const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`,
            {
                headers: {
                    Authorization: process.env.REACT_APP_PHOTO_API_KEY
                },
            }
        );
        const responseJson = await res.json();
        return responseJson.photos;
    };

    const getPhotos = (query) => {
        getData(query)
            .then(response => setPhotos(response))
            .catch(error => console.error(error));
    }

    const store = {
        photoState: {photos,setPhotos},
        searchState: {search, setSearch},
        loginModal: {loginModalOpen,setLoginModalOpen},
        sharePhotoModal: {sharePhotoModalOpen,setSharePhotoModalOpen},
        userState: {user,setUser},
        loginDetails: {email,username,password,setEmail,setUsername,setPassword},
        usernameState: {username,setUsername},
        passwordState: {password,setPassword},
        emailState: {email,setEmail},
        postsState: {posts,setPosts},
        getPhotos,
        getData
    }


    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
}

export default Provider;