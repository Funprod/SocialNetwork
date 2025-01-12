import { ActionTypeStore, DialogsPageTypeStore, MessageDataTypeStore } from './store';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState: DialogsPageTypeStore = {
    dialogsData: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sofiy' },
        { id: 4, name: 'Aysel' },
        { id: 5, name: 'Tany' },
        { id: 6, name: 'Molly' },
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo!' },
        { id: 6, message: 'Yo!' },
    ],
    messageText: '',
};

export const dialogReducer = (
    state: DialogsPageTypeStore = initialState,
    action: ActionTypeStore,
): DialogsPageTypeStore => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, message: state.messageText }],
                messageText: '',
            };
        }
        case UPDATE_MESSAGE_TEXT: {
            return { ...state, messageText: action.newMessage };
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = (): ActionTypeStore => {
    return {
        type: ADD_MESSAGE,
    };
};

export const updateMessageTextActionType = (text: string): ActionTypeStore => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessage: text,
    };
};
