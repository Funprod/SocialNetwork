import { DialogsPageTypeStore } from './store';

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
};

export const dialogReducer = (state: DialogsPageTypeStore = initialState, action: Action): DialogsPageTypeStore => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 7, message: action.newMessageBody }],
            };
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageBody: string) => {
    return {
        type: 'ADD_MESSAGE',
        newMessageBody,
    } as const;
};

type Action = ReturnType<typeof addMessageActionCreator>;
