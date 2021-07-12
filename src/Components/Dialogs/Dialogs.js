import s from './Dialogs.module.css';
import React from 'react';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';

const Dialogs = ({ data }) => {

    const dialogsView = data.dialogsData.map(dialog => {
        return <UserDialog key={dialog.id} id={dialog.id} name={dialog.name} />
    });

    const messagesView = data.messages.map(msg => {
        return <Message key={msg.id} text={msg.text} />
    });

    const newMessageRef = React.createRef();

    const addNewMessage = () => {
        console.log(newMessageRef.current.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsView}
            </div>
            <div className={s.messages}>
                {messagesView}
                <div className={s.addMessageForm}>
                    <textarea ref={newMessageRef} name="" id="" cols="30" rows="10">

                    </textarea>
                    <button onClick={addNewMessage} >Add New Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;