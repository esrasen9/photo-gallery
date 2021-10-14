import React from 'react';

const Post = ({username,caption,imageUrl}) => {
    return (
        <div className="post">
            <img className="photo post-photo" src={imageUrl} alt="post"/>
            <h3 className="caption">{username} : <span className="caption-text">{caption}</span></h3>
        </div>
    );
}

export default Post;