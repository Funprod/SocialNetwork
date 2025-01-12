import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogsItem';
import { Message } from './Message/Message';
import { DialogsPageTypeStore } from '../../redux/store';
import { ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';

type DialogsStateType = {
    addMessage: () => void;
    onChange: (text: string) => void;
    dialogsPage: DialogsPageTypeStore;
    isAuth: boolean;
};

export const Dialogs: React.FC<DialogsStateType> = ({ addMessage, onChange, dialogsPage, isAuth }) => {
    let onClickAddMessage = () => {
        addMessage();
    };

    const onChangeNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={s.messagesContainer}>
            <div className={s.dialogs}>
                {dialogsPage.dialogsData.map((d) => {
                    return <DialogItem key={d.id} name={d.name} id={d.id} />;
                })}
            </div>
            <div className={s.messages}>
                {dialogsPage.messagesData.map((m) => {
                    return <Message key={m.id} message={m.message} />;
                })}
                <div>
                    <textarea
                        placeholder="Введите сообщение"
                        onChange={onChangeNewText}
                        value={dialogsPage.messageText}
                    ></textarea>
                    <button onClick={onClickAddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    );
};
