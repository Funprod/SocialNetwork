import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogReducer } from './dialogs-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './app-reducer';

export const RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export let store = createStore(RootReducer, applyMiddleware(thunk));

export type AppThunksType = ThunkDispatch<RootState, unknown, AnyAction>;

//@ts-ignore
window.store = store;
