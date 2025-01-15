import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { store } from '../../redux/redux-store';

const dispatch = store.dispatch;

export const Login = () => {
    const onSubmit = (formData: any) => {
        const { login: email, password, rememberMe } = formData;
        dispatch(login({ email, password, rememberMe }));
    };
    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
};

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder="password" name={'password'} component={'input'} />
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const ReduxLoginForm = reduxForm({
    form: 'login',
})(LoginForm);
