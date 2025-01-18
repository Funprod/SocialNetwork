import { AnyAction } from 'redux';
import { getAuthUserData } from './auth-reducer';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from './redux-store';

const initialState: AppType = {
    initialized: false,
};

export const appReducer = (state: AppType = initialState, action: ActionType): AppType => {
    switch (action.type) {
        case 'SET_INITIALIZED': {
            return {
                ...state,
                initialized: true,
            };
        }
        default:
            return state;
    }
};
//actions
export const setInitializedSuccess = () =>
    ({
        type: 'SET_INITIALIZED',
    } as const);

//thunks
export const initializeApp = () => (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(setInitializedSuccess());
    });
};

// types

export type AppType = {
    initialized: boolean;
};

type ActionType = ReturnType<typeof setInitializedSuccess>;
