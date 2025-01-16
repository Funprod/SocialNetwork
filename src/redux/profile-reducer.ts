import { Dispatch } from 'redux';
import { profileAPI } from '../api/api';

let initialState: ProfilePageType = {
    postData: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: 'it`s my first post', likeCount: 20 },
        { id: 3, message: 'it`s my second post', likeCount: 20 },
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            github: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: '',
        },
        fullName: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: { large: '', small: '' },
        userId: 1,
    },
    status: '',
    isLoading: false,
};

//actions
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                postData: [...state.postData, { id: 5, message: action.newPost, likeCount: 0 }],
            };
        }
        case 'SET_USER_PROFILE': {
            return { ...state, profile: action.usersProfile };
        }
        case 'SET_USER_STATUS': {
            return { ...state, status: action.status };
        }
        case 'SET_IS_LOADING': {
            return { ...state, isLoading: action.loading };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost: string) => {
    return {
        type: 'ADD_POST',
        newPost,
    } as const;
};

export const setUserProfile = (usersProfile: UserDataType) => {
    return {
        type: 'SET_USER_PROFILE',
        usersProfile,
    } as const;
};

export const setStatus = (status: string) => {
    return {
        type: 'SET_USER_STATUS',
        status,
    } as const;
};

export const setIsLoading = (loading: boolean) => {
    return {
        type: 'SET_IS_LOADING',
        loading,
    } as const;
};

//thunks

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true));
    profileAPI.getProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data));
        dispatch(setIsLoading(false));
    });
};
export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
        dispatch(setStatus(res.data));
    });
};
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status));
            dispatch(setIsLoading(false));
        }
    });
};

//types

type ActionType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setIsLoading>;

type ProfilePageType = {
    profile: UserDataType;
    postData: PostDataType[];
    status: string;
    isLoading: boolean;
};

type PostDataType = {
    id: number;
    message: string;
    likeCount: number;
};

export type UserDataType = {
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotoUserType;
};

type ContactsType = {
    facebook: string;
    website: null | string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: null | string;
    github: string;
    mainLink: null | string;
};

type PhotoUserType = {
    small: string;
    large: string;
};
