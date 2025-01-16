import { AnyAction, Dispatch } from 'redux';
import { authAPI } from '../api/api';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './redux-store';

const initialState: AuthType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
};

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
};
//actions
export const setAuthUserData = ({ id, login, email, isAuth }: AuthType) =>
    ({
        type: 'SET_USER_DATA',
        payload: {
            id,
            login,
            email,
            isAuth,
        },
    } as const);

//thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then((res) => {
        if (res.resultCode === 0) {
            const { id, login, email } = res.data;
            dispatch(setAuthUserData({ id, login, email, isAuth: true }));
        }
    });
};

export const login = (data: LoginAuth) => (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    authAPI.login(data).then((res) => {
        if (res.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
};
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then((res) => {
        if (res.resultCode === 0) {
            dispatch(setAuthUserData({ id: 0, email: '', login: '', isAuth: false }));
        }
    });
};

// types

export type AuthType = {
    id: number;
    email: string;
    login: string;
    isAuth: boolean;
};

export type LoginAuth = {
    email: string;
    password: string;
    rememberMe: boolean;
};

type ActionType = ReturnType<typeof setAuthUserData>;
