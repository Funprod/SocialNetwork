import { AnyAction, Dispatch } from 'redux';
import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';
let initialState: UsersData = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const usersReducer = (state: UsersData = initialState, action: ActionType): UsersData => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
                // state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
                // state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
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

const followUnfollowFlow = async (
    dispatch: Dispatch,
    userId: number,
    apiMethod: ApiMethodType,
    actionCreator: ActionCreatorType,
) => {
    dispatch(setFollowingInProgress(true, userId));
    const res = await apiMethod(userId);

    if (res.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingInProgress(false, userId));
};

export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    const res = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setTotalUsersCount(res.totalCount));
    dispatch(setCurrentPage(page));
};

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

// types

export type UsersData = {
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

type ApiMethodType = (userId: number) => Promise<{ resultCode: number }>;
type ActionCreatorType = (userId: number) => { type: string; userId: number };
