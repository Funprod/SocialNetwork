import './index.css';
import ReactDOM from 'react-dom';
import { store } from './redux/redux-store';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
