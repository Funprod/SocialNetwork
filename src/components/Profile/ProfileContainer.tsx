import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { RootState } from '../../redux/redux-store';
import { getUserProfile, UserDataType } from '../../redux/profile-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
type PathParamsType = {
    userId: string;
};

type MapStateToPropsType = {
    profile: UserDataType;
};

type MapDispatchPropsType = {
    getUserProfile: (usersId: string) => void;
};
type PropsType = RouteComponentProps<PathParamsType> & ProfileType;

type ProfileType = MapStateToPropsType & MapDispatchPropsType;

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) userId = '2';
        this.props.getUserProfile(userId);
    }

    render(): React.ReactNode {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
