import { UserDataType } from '../../../redux/profile-reducer';
import s from './ProfileInfo.module.css';

export type ProfileInfoType = {
    // store: ProfilePageType;
    profile: UserDataType;
};

export const ProfileInfo: React.FC<ProfileInfoType> = ({ profile }) => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/736x/56/bc/92/56bc92d7cad2131fb87f52af3cd3e71c.jpg" alt="#" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="Здесь должна быть ваша фотография" />
                <h2>{profile.fullName}</h2>
                <p>Статус - {profile.aboutMe}</p>
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
