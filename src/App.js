import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/login/Login";
import PhotoContainer from "./components/photos/PhotoContainer";
import SharePhotoModal from "./components/navbar/SharePhotoModal";
import Posts from "./components/explore/posts/Posts";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <SharePhotoModal/>
                <Switch>
                    <Route exact path="/" component={PhotoContainer}/>
                    <Route path="/explore">
                        <Posts />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
  );
}

export default App;
