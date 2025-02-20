import css from "./ProfileImgText.module.css"

export default function ProfileImgText({ name, tag, location, imgUrl = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png" }) {
    return (
        <div>
            <img className={css.img}
                src={imgUrl}
                alt={name}
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
    );
};