import { UserDataType } from '../../../redux/profile-reducer';
import { Preloader } from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

export type ProfileInfoType = {
    profile: UserDataType;
    status: string;
    updateStatus: (status: string) => void;
    isLoading: boolean;
};

export const ProfileInfo: React.FC<ProfileInfoType> = ({ profile, status, updateStatus, isLoading }) => {
    if (isLoading) {
        return <Preloader />;
    }
    return (
        <div>
            <div>
                {/* <img src="https://i.pinimg.com/736x/56/bc/92/56bc92d7cad2131fb87f52af3cd3e71c.jpg" alt="#" /> */}
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="Здесь должна быть ваша фотография" />
                <h2>{profile.fullName}</h2>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <ul>
                    Контакты:
                    <li>{profile.contacts.github}</li>
                    <li>{profile.contacts.vk}</li>
                    <li>{profile.contacts.instagram}</li>
                    <li>{profile.contacts.twitter}</li>
                </ul>
            </div>
        </div>
    );
};
