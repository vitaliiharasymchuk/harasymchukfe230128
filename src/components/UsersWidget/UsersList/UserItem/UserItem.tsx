import React from "react";
import { setSelectedUser } from "../../../../store/usersReducer/usersSlice";
import { useAppDispatch } from "../../../../hooks/hooks";
import { IUser } from "../../../../utils/types";
import style from "./UserItem.module.css";

type IProps = Omit<IUser, "phone" | "email" | "position">

const UserItem = ({ name, nickname, photo }: IProps) => {
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        dispatch(setSelectedUser(nickname));
    };

    return (
        <div className={style.container}>
            <img src={require(`../../../../photos/${photo}`)} alt={photo} />
            <div className={style.names}>
                <h2>{name}</h2>
                <h3>{nickname}</h3>
            </div>
            <button className={style.viewButton} onClick={handleButtonClick}>View</button>
        </div>
    );
};

export default UserItem;