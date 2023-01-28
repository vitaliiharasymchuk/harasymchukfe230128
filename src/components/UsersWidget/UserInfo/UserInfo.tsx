import React from "react";
import { IUser } from "../../../utils/types";
import style from "./UserInfo.module.css";

interface IProps {
    user: IUser;
    onClose: () => void;
}

const UserInfo = ({ user, onClose }: IProps) => {
    return (
        <div className={style.container}>
            <button className={style.closeButton} onClick={onClose}>+</button>
            <div className={style.mainInfo}>
                <img src={require(`../../../photos/${user.photo}`)} alt={user.photo} />
                <h2>{user.name}</h2>
                <h3>{user.position}</h3>
            </div>
            <div className={style.additionalInfo}>
                <div>
                    <h2>Phone</h2>
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                </div>
                <div>
                    <h2>Nickname</h2>
                    <a href="#">{user.nickname}</a>
                </div>
                <div>
                    <h2>Email</h2>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </div>
            </div>
            <button className={style.sendMessageButton}>Send message</button>
        </div>
    );
};

export default UserInfo;