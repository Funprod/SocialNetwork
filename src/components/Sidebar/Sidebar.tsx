import { SideBarTypeStore, StateTypeStore } from '../../redux/store';
import s from './Sidebar.module.css';

type SidebarStateType = {
    state: SideBarTypeStore[];
};

export const Sidebar: React.FC<SidebarStateType> = ({ state }) => {
    return (
        <div className={s.sidebarContainer}>
            <span className={s.text}>Friends</span>
            <div className={s.sidebarContainerFriends}>
                {state.map((sd) => {
                    return (
                        <div>
                            <div className={s.avatar}></div>
                            <span>{sd.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
