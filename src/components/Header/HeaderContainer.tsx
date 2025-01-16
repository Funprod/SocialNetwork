import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../../redux/auth-reducer';
import { RootState } from '../../redux/redux-store';

type MapStateToPropsType = any;

type MapDispatchPropsType = {
    getAuthUserData: () => void;
};

type HeaderContainerType = MapStateToPropsType | MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount(): void {
        this.props.getAuthUserData();
    }
    render(): React.ReactNode {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
