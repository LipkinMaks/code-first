import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, hou are you?' likesCount='0'/>
                <Post message="It's my first post!" likesCount='25'/>
                <Post message='Nice!'/>
                <Post message="It's coole!"/>
            </div>
        </div>
    )
}

export default MyPosts;