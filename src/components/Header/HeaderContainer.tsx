import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import { RootState } from '../../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean;
    login: string;
};

type MapDispatchPropsType = {};

type HeaderContainerType = MapStateToPropsType | MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerType> {
    render(): React.ReactNode {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(HeaderContainer);
