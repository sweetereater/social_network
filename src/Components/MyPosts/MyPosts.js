import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            My Posts
            {
                props.posts.map(post => {
                    return <Post
                        key={post.id}
                        text={post.text}
                        likesCount={post.likesCount}
                        imageSource={post.imgSrc}
                    />
                })
            }
        </div>
    )
}

export default MyPosts;