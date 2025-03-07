import css from "./ProfileList.module.css"

export default function ProfileList({ stats: { followers, views, likes } }) {
    return (
        <ul className={css.list}>
            <li className={css.item}>
                <span className={css.spanTitle}>Followers</span>
                <span className={css.spanQuantity}>{followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.spanTitle}>Views</span>
                <span className={css.spanQuantity}>{views}</span>
            </li>
            <li className={css.item}>
                <span className={css.spanTitle}>Likes</span>
                <span className={css.spanQuantity}>{likes}</span>
            </li>
        </ul>
    );
};