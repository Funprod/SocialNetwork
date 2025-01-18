import { Dispatch } from 'redux';
import { usersAPI } from '../api/api';
let initialState: UsersDataType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const usersReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
            };
        case 'SET_USERS':
            return { ...state, users: action.users };

        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage };
        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case 'SET_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            };
        default:
            return state;
    }
};

//actions
export const followSuccess = (userId: number) => ({ type: 'FOLLOW', userId } as const);
export const unfollowSuccess = (userId: number) => ({ type: 'UNFOLLOW', userId } as const);
export const setUsers = (users: UserType[]) => ({ type: 'SET_USERS', users } as const);
export const setCurrentPage = (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const);
export const setTotalUsersCount = (totalCount: number) => ({ type: 'SET_TOTAL_COUNT', totalCount } as const);
export const setIsFetching = (isFetching: boolean) => ({ type: 'SET_IS_FETCHING', isFetching } as const);
export const setFollowingInProgress = (isProgress: boolean, userId: number) =>
    ({ type: 'SET_FOLLOWING_IN_PROGRESS', isProgress, userId } as const);

//thunks

export const getUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(page, pageSize).then((res) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(res.items));
        dispatch(setTotalUsersCount(res.totalCount));
        dispatch(setCurrentPage(page));
    });
};

export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    usersAPI.follow(userId).then((res) => {
        if (res.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(setFollowingInProgress(false, userId));
    });
};

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    usersAPI.unfollow(userId).then((res) => {
        if (res.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(setFollowingInProgress(false, userId));
    });
};

// types

export type UsersDataType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
};

export type UserType = {
    name: string;
    id: number;
    photos: PhotosType;
    status: string | null;
    followed: boolean;
};

export type PhotosType = {
    small: string | undefined;
    large: string | undefined;
};

type ActionType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setFollowingInProgress>;
