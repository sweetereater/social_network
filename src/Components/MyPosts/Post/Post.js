import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <img
                className={s.post__img}
                src="http://www.thaicybergames.com/dota/images/heroes/9.jpg"
                alt=""
            />
            Hello World!
            <button className={s.button}>Like!</button>
        </div>
    )
}

export default Post;