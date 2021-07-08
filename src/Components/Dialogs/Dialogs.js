import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.userDialog}>
                    Nadya
                </div>
                <div className={s.userDialog}>
                    Oleg
                </div>
                <div className={s.userDialog}>
                    Artem
                </div>
                <div className={s.userDialog}>
                    Elya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Heyyooo!</div>
                <div className={s.message}>How do you do you?</div>
                <div className={s.message}>Dzzzip Dzaaap</div>
            </div>
        </div>
    )
}

export default Dialogs;