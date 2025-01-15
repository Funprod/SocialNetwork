import { UserDataType } from '../../redux/profile-reducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
    // store: ProfilePageType;
    profile: UserDataType;
    status: string;
    updateStatus: (status: string) => void;
    isLoading: boolean;
};

export const Profile: React.FC<ProfileType> = ({ profile, status, updateStatus, isLoading }) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isLoading={isLoading} />
            <MyPostsContainer />
        </div>
    );
};
