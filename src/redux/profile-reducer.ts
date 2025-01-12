import { Dispatch } from 'redux';
import { profileAPI } from '../api/api';

let initialState: ProfilePageType = {
    postData: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: 'it`s my first post', likeCount: 20 },
        { id: 3, message: 'it`s my second post', likeCount: 20 },
    ],
    newPostText: '',
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
};

//actions
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                postData: [...state.postData, { id: 5, message: state.newPostText, likeCount: 0 }],
                newPostText: '',
            };
        }
        case 'UPDATE_POST_NEW_TEXT': {
            state.newPostText = action.newText;
            return { ...state, newPostText: action.newText };
        }
        case 'SET_USER_PROFILE': {
            return { ...state, profile: action.usersProfile };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST',
    } as const;
};
export const updatePostNewTextActionType = (text: string) => {
    return {
        type: 'UPDATE_POST_NEW_TEXT',
        newText: text,
    } as const;
};

export const setUserProfile = (usersProfile: UserDataType) => {
    return {
        type: 'SET_USER_PROFILE',
        usersProfile,
    } as const;
};

//thunks

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data));
    });
};

//types

type ActionType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updatePostNewTextActionType>
    | ReturnType<typeof setUserProfile>;

type ProfilePageType = {
    profile: UserDataType;
    postData: PostDataType[];
    newPostText: string;
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
