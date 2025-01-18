import React from 'react';
import { PostDataTypeStore } from '../../../redux/store';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { FormControl } from '../../common/FormsControls/FormsControls';

type MyPostDataType = {
    postData: PostDataTypeStore[];
    addPost: (addNewPost: string) => void;
};

export const MyPosts: React.FC<MyPostDataType> = ({ postData, addPost }) => {
    console.log('RENDER my posts');

    const addNewPost = (values: FormData) => {
        addPost(values.addNewPost);
    };

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <AddNewPostRedux onSubmit={addNewPost} />
            </div>
            <div className={s.posts}>
                {postData.map((p) => {
                    return <Post key={p.id} message={p.message} likeCount={p.likeCount} />;
                })}
            </div>
        </div>
    );
};

type FormData = {
    addNewPost: string;
};

const maxLength10 = maxLengthCreator(10);

export const AddNewPost = (props: InjectedFormProps<FormData>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Введите текст'}
                    name={'addNewPost'}
                    tagName={'textarea'}
                    component={FormControl}
                    validate={[required, maxLength10]}
                />
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    );
};

const AddNewPostRedux = reduxForm<FormData>({ form: 'profileAddNewPost' })(AddNewPost);
