import s from './Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <main className={s.main}>
            <img className={s.main__img} src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="" />
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                onNewPostTextChange={props.handlePostChange}
            />
        </main>
    )
}

export default Profile;