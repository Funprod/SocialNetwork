import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login, LoginAuth, logout } from '../../redux/auth-reducer';
import { createField, FormControl } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validator';
import s from './Login.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux/redux-store';

const Login = (props: LoginComponent) => {
    const onSubmit = (formData: FormData) => {
        const { login: email, password, rememberMe } = formData;
        // dispatch(login({ email, password, rememberMe }));
        props.login({ email, password, rememberMe });
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />;
    }
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
};

export const LoginForm = (props: InjectedFormProps<FormData>) => {
    const { handleSubmit, error } = props;
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', 'input', FormControl, [required], null, null)}
            {createField('password', 'password', 'input', FormControl, [required], 'password', null)}
            {props.error && <div className={s.formSummaryError}>{error}</div>}
            <div className={s.rememberMe}>
                {createField(null, 'rememberMe', 'input', FormControl, null, 'checkbox', 'запомнить меня')}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm<FormData>({
    form: 'login',
})(LoginForm);

const mapStateToProps = (state: RootState) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);

//types

type FormData = {
    login: string;
    password: string;
    rememberMe: boolean;
};
type LoginComponent = {
    login: (data: LoginAuth) => void;
    isAuth: boolean;
};
