import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { follow, getUsers, setFollowingInProgress, unfollow } from '../../redux/users-reducer';
import { UserType } from '../../redux/users-reducer';
import React from 'react';
import { Users } from './Users';
import { Preloader } from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector,
} from '../../redux/users-selectors';

export type UsersContainerType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: number[];
    setFollowingInProgress: (isProgress: boolean, userId: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
};

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize);
    };

    render(): React.ReactNode {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    setFollowingInProgress={this.props.setFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        );
    }
}

// let mapStateToProps = (state: RootState) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     };
// };
let mapStateToProps = (state: RootState) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    };
};

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        setFollowingInProgress,
        getUsers,
        follow,
        unfollow,
    }),
)(UsersContainer);
