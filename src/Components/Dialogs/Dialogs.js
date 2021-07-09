import s from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';

const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: "Nadya" },
        { id: 2, name: "Oleg" },
        { id: 3, name: "Artem" },
        { id: 4, name: "Elya" },
        { id: 5, name: "Ilya" },
    ]

    const messages = [
        { id: 1, text: "Heyyooo!" },
        { id: 2, text: "How do you do you?" },
        { id: 3, text: "Dzzzip Dzaaap" },
        { id: 4, text: "Piu piu... piu piu piu!" },
        { id: 5, text: 'Meeeowww ~~' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(dialog => {
                    return <UserDialog key={dialog.id} id={dialog.id} name={dialog.name} />
                })}
            </div>
            <div className={s.messages}>
                {messages.map(msg => {
                    return <Message key={msg.id} text={msg.text} />
                })}
            </div>
        </div>
    )
}

export default Dialogs;