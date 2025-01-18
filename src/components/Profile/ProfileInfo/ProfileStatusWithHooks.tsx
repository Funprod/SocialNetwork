import { ChangeEvent, useEffect, useState } from 'react';

export type ProfileStatus = {
    status: string;
    updateStatus: (status: string) => void;
};

export const ProfileStatusWithHooks = (props: ProfileStatus) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {editMode ? (
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status} />
                </div>
            ) : (
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'статус'}</span>
                </div>
            )}
        </div>
    );
};
