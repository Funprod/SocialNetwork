import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { AuthType } from '../../redux/auth-reducer';

export const Header: React.FC<any> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://banner2.cleanpng.com/20180425/soq/kisspng-logo-clip-art-5ae10d88490e92.4932963515246985042993.jpg" />

            <div className={s.loginBlock}>
                {props.isAuth ? (
                    props.login
                ) : (
                    <NavLink to={'/login'} className={s.loginBtn}>
                        Login
                    </NavLink>
                )}
            </div>
        </header>
    );
};
