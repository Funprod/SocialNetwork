import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { getUserProfile, getUserStatus, updateUserStatus, UserDataType } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
type PathParamsType = {
    userId: string;
};

type MapStateToPropsType = {
    profile: UserDataType;
    status: string;
    isAuth: boolean;
    isLoading: boolean;
    authUserId: number;
};

type MapDispatchPropsType = {
    getUserProfile: (usersId: string) => void;
    getUserStatus: (userId: string) => void;
    updateUserStatus: (status: string) => void;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfileType;

type ProfileType = MapStateToPropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authUserId.toString();
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render(): React.ReactNode {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateUserStatus}
                isLoading={this.props.isLoading}
            />
        );
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    isLoading: state.profilePage.isLoading,
    authUserId: state.auth.id,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
