import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img
                className={s.post__img}
                src={props.imageSource}
                alt=""
            />
            {props.text}
            <br />
            Likes - {props.likesCount}
        </div>
    )
}

export default Post;