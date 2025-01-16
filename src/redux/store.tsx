import { dialogReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';

export type PostDataTypeStore = {
    id?: number;
    message: string;
    likeCount: number;
};

export type DialogsDataTypStore = {
    id: number;
    name: string;
};

export type MessageDataTypeStore = {
    id?: number;
    message: string;
};

export type ProfilePageTypeStore = {
    postData: PostDataTypeStore[];
    newPostText: string;
};

export type DialogsPageTypeStore = {
    messagesData: MessageDataTypeStore[];
    dialogsData: DialogsDataTypStore[];
};

export type SideBarTypeStore = {
    id: number;
    name: string;
};

export type StateTypeStore = {
    profilePage: ProfilePageTypeStore;
    dialogsPage: DialogsPageTypeStore;
    sidebar: SideBarTypeStore[];
};

export type AddPostActionTypeStore = {
    type: 'ADD_POST';
};
export type UpdatePostNewTextActionTypeStore = {
    type: 'UPDATE_POST_NEW_TEXT';
    newText: string;
};

export type AddMessageActionTypeStore = {
    type: 'ADD_MESSAGE';
};

export type UpdateMessageTextActionTypeStore = {
    type: 'UPDATE_MESSAGE_TEXT';
    newMessage: string;
};

export type ActionTypeStore =
    | AddPostActionTypeStore
    | UpdatePostNewTextActionTypeStore
    | AddMessageActionTypeStore
    | UpdateMessageTextActionTypeStore;

export type StoreType = {
    _state: StateTypeStore;
    _callSubscriber: (state: any) => void;
    getState: () => StateTypeStore;
    subscribe: (observer: any) => void;
    dispatch: (action: ActionTypeStore) => void;
};

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: 1, message: 'Hi, how are you?', likeCount: 15 },
//                 { id: 1, message: 'it`s my first post', likeCount: 20 },
//                 { id: 1, message: 'it`s my second post', likeCount: 20 },
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             dialogsData: [
//                 { id: 1, name: 'Dimych' },
//                 { id: 2, name: 'Andrey' },
//                 { id: 3, name: 'Sofiy' },
//                 { id: 4, name: 'Aysel' },
//                 { id: 5, name: 'Tany' },
//                 { id: 6, name: 'Molly' },
//             ],
//             messagesData: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'How are you?' },
//                 { id: 3, message: 'Yo!' },
//                 { id: 4, message: 'Yo!' },
//                 { id: 5, message: 'Yo!' },
//                 { id: 6, message: 'Yo!' },
//             ],
//             messageText: '',
//         },
//         sidebar: [
//             { id: 1, name: 'Aysel' },
//             { id: 2, name: 'Andrey' },
//             { id: 3, name: 'Sofiy' },
//         ],
//     },
//     _callSubscriber() {},
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: any) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//         this._callSubscriber(this._state);
//     },
// };
