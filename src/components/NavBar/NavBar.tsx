import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';
import React from 'react';

type NavBarStateType = {
    // state: StateType;
};

export const NavBar: React.FC<NavBarStateType> = ({}) => {
    return (
        <nav>
            <div className={s.nav}>
                <div className={`${s.item}`}>
                    <NavLink to="/profile" activeClassName={s.active}>
                        Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Dialogs" activeClassName={s.active}>
                        Messages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>
                        Users
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>
                        Settings
                    </NavLink>
                </div>
                <div className={s.item}>{/* <Sidebar state={state.sidebar} /> */}</div>
            </div>
        </nav>
    );
};
