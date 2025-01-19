import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { HashRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { RootState } from './redux/redux-store';
import { Preloader } from './components/common/Preloader/Preloader';

type MapDispatchPropsType = {
    initializeApp: () => void;
};

type MapStateToProps = {
    initialized: boolean;
};

class App extends Component<MapDispatchPropsType & MapStateToProps> {
    componentDidMount(): void {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) return <Preloader />;
        return (
            <HashRouter>
                <div className="app-wrapper">
                    <HeaderContainer />
                    <NavBar /* state={state} */ />
                    <div className="app-wrapper-content">
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
                        <Route path={'/Dialogs'} render={() => <DialogsContainer />} />
                        <Route path={'/news'} render={() => <News />} />
                        <Route path={'/music'} render={() => <Music />} />
                        <Route path={'/users'} render={() => <UsersContainer />} />
                        <Route path={'/settings'} render={() => <Settings />} />
                        <Route path={'/login'} render={() => <Login />} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state: RootState): MapStateToProps => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
