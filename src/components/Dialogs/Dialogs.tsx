import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogsItem';
import { Message } from './Message/Message';
import { DialogsPageTypeStore } from '../../redux/store';
import { ChangeEvent } from 'react';
import { Field, reduxForm } from 'redux-form';

type DialogsStateType = {
    addMessage: () => void;
    onChange: (text: string) => void;
    dialogsPage: DialogsPageTypeStore;
};

export const Dialogs: React.FC<DialogsStateType> = ({ addMessage, onChange, dialogsPage }) => {
    let onClickAddMessage = () => {
        addMessage();
    };

    const onChangeNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };
    const addNewMessage = (values: any) => {
        alert(values.newMessageBody);
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
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
};

type MessageForm = any;

const AddMessageForm = (props: MessageForm) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageBody'}
                    placeholder={'Введите сообщение'}
                    // value={dialogsPage.messageText}
                />
                {/* <textarea
                    placeholder="Введите сообщение"
                    onChange={onChangeNewText}
                    value={dialogsPage.messageText}
                ></textarea> */}
                <button>Отправить</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);
