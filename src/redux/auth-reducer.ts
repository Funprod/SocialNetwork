import { Dispatch } from 'redux';
import { authAPI } from '../api/api';

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data,
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

// types

export type AuthType = {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
};

type ActionType = ReturnType<typeof setAuthUserData>;
