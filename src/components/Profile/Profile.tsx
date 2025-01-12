import { UserDataType } from '../../redux/profile-reducer';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileType = {
    // store: ProfilePageType;
    profile: UserDataType;
};

export const Profile: React.FC<ProfileType> = ({ profile }) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
};
