/* eslint-disable jsx-a11y/alt-text */
import { UserType } from '../../redux/users-reducer';
import s from './user.module.css';
import userPhoto from '../../assets/img/images.png';
import { NavLink } from 'react-router-dom';

export type UsersType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage?: number;
    followingInProgress: number[];
    onPageChanged: (page: number) => void;
    setFollowingInProgress: (isProgress: boolean, userId: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
};

export const Users: React.FC<UsersType> = ({
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    followingInProgress,
    follow,
    unfollow,
    onPageChanged,
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p) => {
                    return (
                        <span
                            onClick={(e) => {
                                onPageChanged(p);
                            }}
                            className={currentPage === p ? s.selectedPage : ''}
                        >
                            {p}
                        </span>
                    );
                })}
            </div>
            {users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img
                                    src={u.photos.small !== null ? u.photos.small : userPhoto}
                                    className={s.userPhoto}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    disabled={followingInProgress.some((id) => id === u.id)}
                                    onClick={() => {
                                        unfollow(u.id);
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={followingInProgress.some((id) => id === u.id)}
                                    onClick={() => {
                                        follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};
