import React from "react";
import { setSelectedUser } from "../../store/usersReducer/usersSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import UsersList from "./UsersList/UsersList";
import UserInfo from "./UserInfo/UserInfo";
import { IUser } from "../../utils/types";
import style from "./UsersWidget.module.css";

interface IProps {
    users: IUser[];
}

const UsersWidget = ({ users }: IProps) => {
    const dispatch = useAppDispatch();
    const { selectedUser } = useAppSelector(state => state.mainReducer);

    const clearSelectedUser = () => {
        dispatch(setSelectedUser(null));
    };

    return (
        <div className={style.container}>
            {selectedUser ? <UserInfo user={selectedUser} onClose={clearSelectedUser} /> : <UsersList users={users} />}
        </div>
    );
};

export default UsersWidget;