import { StateTypeStore } from '../../../redux/store';
import { addPostActionCreator, updatePostNewTextActionType } from '../../../redux/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/redux-store';
import { Dispatch } from 'redux';

type MapStatePropsType = {};

let mapStateToProps = (state: RootState) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updatePostNewText: (text: string) => {
            dispatch(updatePostNewTextActionType(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
