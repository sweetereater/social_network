import s from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/profile">Profile</Link>
            </div>
            <div className={s.item}>
                <Link to="/messages">Messages</Link>
            </div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
        </nav>
    )
}

export default Nav;