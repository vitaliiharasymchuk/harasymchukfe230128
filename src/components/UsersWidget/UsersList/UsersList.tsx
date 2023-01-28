import React, { useState } from "react";
import UserItem from "./UserItem/UserItem";
import { IUser } from "../../../utils/types";
import style from "./UserList.module.css";

interface IProps {
    users: IUser[];
}

const UsersList = ({ users }: IProps) => {
    const [isShowAllUsers, setIsShowAllUsers] = useState<boolean>(false);

    const handleButtonClick = () => {
        setIsShowAllUsers(prevState => !prevState);
    };

    return (
        <div className={style.container}>
            {users.slice(0, isShowAllUsers ? users.length : 3)
                .map(user =>
                    <UserItem key={user.nickname} name={user.name} nickname={user.nickname}
                              photo={user.photo} />)}
            {users.length > 3 && <button onClick={handleButtonClick}>View {isShowAllUsers ? "less" : "all"}</button>}
        </div>
    );
};

export default UsersList;