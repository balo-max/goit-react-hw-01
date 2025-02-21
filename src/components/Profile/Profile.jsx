import ProfileImgText from "../ProfileImgText/ProfileImgText";
import ProfileList from "../ProfileList/ProfileList";
import css from "./Profile.module.css"

export default function Profile({ userData }) {
    return (
        <div className={css.container}>
            <ProfileImgText
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar} />

            <ProfileList
                stats={userData.stats} />
        </div>
    );
}