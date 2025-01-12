import React from 'react';
import s from './Post.module.css';

export type PostType = {
    id?: number;
    message: string;
    likeCount: number;
};

export const Post: React.FC<PostType> = ({ message, likeCount }) => {
    return (
        <div className={s.item}>
            <img
                src="https://sun9-57.userapi.com/c302402/u169346695/-6/x_cdab859e.jpg"
                alt=""
            />
            {message}
            <div>
                <span>like</span>
                <span>{likeCount}</span>
            </div>
        </div>
    );
};
