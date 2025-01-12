import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

export type DialogItemType = {
    id: number;
    name: string;
};

export const DialogItem = ({ id, name }: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/Dialogs/' + id}>{name}</NavLink>
        </div>
    );
};
