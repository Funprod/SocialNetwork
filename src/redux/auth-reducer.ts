import { Dispatch } from 'redux';
import { authAPI } from '../api/api';

let initialState: AuthType = {
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
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true,
            };
        }
        default:
            return state;
    }
};
//actions
export const setAuthUserData = (data: AuthType) => ({ type: 'SET_USER_DATA', data } as const);

//thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then((res) => {
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(res.data));
        }
    });
};

export const login = (data: Login) => (dispatch: Dispatch) => {
    authAPI.login(data).then((res) => {
        if (res.resultCode === 0) {
            dispatch(setAuthUserData(res.data));
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

export type Login = {
    email: string;
    password: string;
    rememberMe: boolean;
};

type ActionType = ReturnType<typeof setAuthUserData>;
