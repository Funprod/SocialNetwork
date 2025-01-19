/* eslint-disable jsx-a11y/alt-text */
import { UserType } from '../../../redux/users-reducer';
import s from './user.module.css';
import userPhoto from '../../../assets/img/images.png';
import { NavLink } from 'react-router-dom';

export const User: React.FC<UserComponent> = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div>
            {' '}
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button
                            disabled={followingInProgress.some((id) => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={followingInProgress.some((id) => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}
                        >
                            Follow
                        </button>
                    )}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
        </div>
    );
};

// types

export type UserComponent = {
    user: UserType;
    followingInProgress: number[];
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
};
