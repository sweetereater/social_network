import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postsData = [
        {
            id: 1,
            text: "Hello World!",
            likesCount: 5,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/72.jpg"
        },
        {
            id: 2,
            text: "По-тихонечку едем",
            likesCount: 8,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/101.jpg"
        },
        {
            id: 3,
            text: "React is nice",
            likesCount: 12,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/80.jpg"
        },
        {
            id: 4,
            text: "Как Ваши дела?",
            likesCount: 6,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/55.jpg"
        },
        {
            id: 5,
            text: "Почти 25% пути самурая, юхууу!",
            likesCount: 9,
            imgSrc: "http://www.thaicybergames.com/dota/images/heroes/43.jpg"
        },

    ]

    return (
        <div className={s.posts}>
            My Posts
            {
                postsData.map(post => {
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