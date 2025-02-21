import clsx from "clsx";

import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
    const statusClass = clsx(css.status, isOnline ? css.online : css.offline)
    return (
        <div className={css.wrapperItem}>
            <img className={css.image} src={avatar} alt={name} width="120" />
            <p className={css.name}>{name}</p>
            <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}