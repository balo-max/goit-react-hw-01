import css from "./ProfileImgText.module.css"

export default function ProfileImgText({ name, tag, location, image }) {
    return (
        <div>
            <img className={css.image}
                src={image}
                alt={name}
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    );
};