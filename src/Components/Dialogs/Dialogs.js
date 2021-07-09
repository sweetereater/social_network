import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(dialog => {
                    return <UserDialog key={dialog.id} id={dialog.id} name={dialog.name} />
                })}
            </div>
            <div className={s.messages}>
                {props.messages.map(msg => {
                    return <Message key={msg.id} text={msg.text} />
                })}
            </div>
        </div>
    )
}

export default Dialogs;