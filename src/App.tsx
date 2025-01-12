import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { HashRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App() {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <NavBar /* state={state} */ />
                <div className="app-wrapper-content">
                    {/* <Route path={'/'} render={() => <Profile />} /> */}
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

export default App;
