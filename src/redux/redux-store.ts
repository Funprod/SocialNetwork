import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

// export let store = createStore(RootReducer, applyMiddleware(thunk));

//@ts-ignore
window.store = store;

//types
export type AppThunksType = ThunkDispatch<RootState, unknown, AnyAction>;
export type RootState = ReturnType<typeof RootReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
