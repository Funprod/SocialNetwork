import React, { useRef } from 'react';
import { PostDataTypeStore } from '../../../redux/store';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostDataType = {
    postData: PostDataTypeStore[];
    newPostText: string;
    updatePostNewText: (text: string) => void;
    addPost: () => void;
};

export const MyPosts: React.FC<MyPostDataType> = ({ postData, newPostText, updatePostNewText, addPost }) => {
    let newPostElement = useRef<HTMLTextAreaElement>(null);
    const onClickAddPost = () => {
        addPost();
    };

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            const text = newPostElement.current.value;
            updatePostNewText(text);
        }
    };

    return (
        <div className={s.postBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        placeholder="Введите текст"
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={newPostText}
                    />
                </div>
                <div>
                    <button onClick={onClickAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postData.map((p) => {
                    return <Post key={p.id} message={p.message} likeCount={p.likeCount} />;
                })}
            </div>
        </div>
    );
};
