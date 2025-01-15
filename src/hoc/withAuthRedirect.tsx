import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../redux/redux-store';
import { ComponentType } from 'react';
import { Preloader } from '../components/common/Preloader/Preloader';

type MapStateToPropsType = {
    isAuth?: boolean;
};

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
});

export function withAuthRedirect(Component: ComponentType<any>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let { isAuth, ...restProps } = props;
        // if (!isAuth) return <Preloader />;
        if (!isAuth) return <Redirect to={'/login'} />;
        return <Component {...restProps} />;
    };

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedRedirectComponent;
}
