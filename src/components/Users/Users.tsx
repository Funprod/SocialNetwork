/* eslint-disable jsx-a11y/alt-text */
import { UserType } from '../../redux/users-reducer';
import { Paginator } from '../common/Paginator/Paginator';
import { User } from './User/User';

export const Users: React.FC<UsersComponent> = ({
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    followingInProgress,
    follow,
    unfollow,
    onPageChanged,
}) => {
    return (
        <div>
            <Paginator
                onPageChanged={onPageChanged}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
            />
            {users.map((u) => (
                <User
                    follow={follow}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                    user={u}
                    key={u.id}
                />
            ))}
        </div>
    );
};

// types

export type UsersComponent = {
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
