import { createSelector } from 'reselect';
import { RootState } from './redux-store';

const getUsers = (state: RootState) => state.usersPage.users;

export const getUsersSelector = createSelector(getUsers, (u) => u);

export const getPageSizeSelector = (state: RootState) => state.usersPage.pageSize;
export const getTotalUsersCountSelector = (state: RootState) => state.usersPage.totalUsersCount;
export const getCurrentPageSelector = (state: RootState) => state.usersPage.currentPage;
export const getIsFetchingSelector = (state: RootState) => state.usersPage.isFetching;
export const getFollowingInProgressSelector = (state: RootState) => state.usersPage.followingInProgress;
