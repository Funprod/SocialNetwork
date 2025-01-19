import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogsItem';
import { Message } from './Message/Message';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FormControl } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';
import { DialogsPageTypeStore } from '../../redux/dialogs-reducer';

type DialogsStateType = {
    addMessage: (newMessageBody: string) => void;
    dialogsPage: DialogsPageTypeStore;
};

export const Dialogs: React.FC<DialogsStateType> = ({ addMessage, dialogsPage }) => {
    const addNewMessage = (values: FormData) => {
        addMessage(values.newMessageBody);
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

type FormData = {
    newMessageBody: string;
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props: InjectedFormProps<FormData>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    tagName={'textarea'}
                    component={FormControl}
                    validate={[required, maxLength50]}
                    name={'newMessageBody'}
                    placeholder={'Введите сообщение'}
                />
                <button>Отправить</button>
            </div>
        </form>
    );
};

const AddMessageFormRedux = reduxForm<FormData>({ form: 'dialogAddMessageForm' })(AddMessageForm);
