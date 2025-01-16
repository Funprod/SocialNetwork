import { addPostActionCreator } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/redux-store';
import { Dispatch } from 'redux';

let mapStateToProps = (state: RootState) => {
    return {
        postData: state.profilePage.postData,
    };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (addNewPost: string) => {
            dispatch(addPostActionCreator(addNewPost));
        },
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
