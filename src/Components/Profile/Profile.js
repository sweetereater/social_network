import s from './Profile.module.css';

const Profile = () => {
    return (
        <main className={s.main}>
            <img src="https://klike.net/uploads/posts/2019-06/1559370578_1.jpg" alt="" />
            <div>
                ava + descriptions
            </div>
            <div>
                My Posts
                <div>
                    Hello World!
                </div>
                <div>
                    How are you?
                </div>
            </div>
        </main>
    )
}

export default Profile;