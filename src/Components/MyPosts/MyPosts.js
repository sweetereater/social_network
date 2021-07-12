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

    const alertSomething = () => {
        const text = textField.current.value;
        alert(text);
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <div>
                    <textarea ref={textField} cols="50" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={alertSomething}>Add new post</button>
                </div>
            </div>
            {myPosts}
        </div>
    )
}

export default MyPosts;