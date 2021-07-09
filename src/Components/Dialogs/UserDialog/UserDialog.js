import { NavLink } from 'react-router-dom';
import s from './UserDialog.module.css'

const UserDialog = (props) => {
    const path = `/messages/${props.id}`;
    return (
        <div className={s.userDialog}>
            <NavLink activeClassName={s.activeDialog} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default UserDialog;