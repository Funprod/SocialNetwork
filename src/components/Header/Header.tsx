import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderComponent = any;

export const Header: React.FC<HeaderComponent> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://banner2.cleanpng.com/20180425/soq/kisspng-logo-clip-art-5ae10d88490e92.4932963515246985042993.jpg" />

            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login} - <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={'/login'} className={s.loginBtn}>
                        Login
                    </NavLink>
                )}
            </div>
        </header>
    );
};
