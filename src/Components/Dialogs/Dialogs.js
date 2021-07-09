import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <UserDialog id={1} name="Nadya" />
                <UserDialog id={2} name="Oleg" />
                <UserDialog id={5} name="Ilya" />
                <UserDialog id={3} name="Artem" />
                <UserDialog asd id={4} name="Elya" />
            </div>
            <div className={s.messages}>
                <Message text="Heyyooo!" />
                <Message text="How do you do you?" />
                <Message text="Dzzzip Dzaaap" />
                <Message text="Piu piu... piu piu piu!" />
            </div>
        </div>
    )
}

export default Dialogs;