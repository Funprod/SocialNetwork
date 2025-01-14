import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import thunk from 'redux-thunk';

export const RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export let store = createStore(RootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;
