import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const textField = React.createRef();

    const myPosts = props.posts.map(post => {
        return <Post
            key={post.id}
            text={post.text}
            likesCount={post.likesCount}
            imageSource={post.imgSrc}
        />
    })

    const addNewPost = (event) => {
        props.addPost(props.newPostText);
        textField.current.value = "";
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <div>
                    <textarea
                        ref={textField}
                        value={props.newPostText}
                        onChange={props.onNewPostTextChange}
                    />
                </div>
                <div>
                    <button onClick={addNewPost}>Add new post</button>
                </div>
            </div>
            {myPosts}
        </div>
    )
}

export default MyPosts;