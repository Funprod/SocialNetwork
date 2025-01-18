import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login, LoginAuth, logout } from '../../redux/auth-reducer';
import { FormControl } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validator';
import s from './Login.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux/redux-store';

// const dispatch = store.dispatch;

type LoginComponent = {
    login: (data: LoginAuth) => void;
    isAuth: boolean;
};

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

type FormData = {
    login: string;
    password: string;
    rememberMe: boolean;
};

export const LoginForm = (props: InjectedFormProps<FormData>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    tagName={'input'}
                    component={FormControl}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    tagName={'input'}
                    component={FormControl}
                    placeholder="password"
                    name={'password'}
                    validate={[required]}
                    type={'password'}
                />
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div className={s.rememberMe}>
                <span>запомнить меня</span>
                <Field name={'rememberMe'} type={'checkbox'} component={FormControl} tagName={'Input'} />
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
