import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
        </nav>
    )
}

export default Nav;