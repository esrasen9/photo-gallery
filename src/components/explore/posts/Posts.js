import React, {useContext,useEffect} from 'react';
import Post from "./Post";
import {Context} from "../../../context/Context";
import {db} from "../../../firebase/firebase";

const Posts = () => {
    const {postsState} = useContext(Context);
    const {posts,setPosts} = postsState;

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    data:doc.data(),
                    id: doc.id
                })))
        })
    },[]);

    return (
        <div className="photo-container posts">
            {
                posts && posts.map(({id,data}) => {
                    return (
                        <Post
                            key={id}
                            username={data.username}
                            caption={data.caption}
                            imageUrl={data.imageUrl}/>)
                })
            }
       </div>
    );
}

export default Posts;