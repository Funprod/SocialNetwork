import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionType } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { RootState } from '../../redux/redux-store';
import { compose, Dispatch } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChange: (text: string) => {
            dispatch(updateMessageTextActionType(text));
        },
    };
};

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);