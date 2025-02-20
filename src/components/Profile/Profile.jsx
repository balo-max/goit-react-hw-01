import ProfileImgText from "../ProfileImgText/ProfileImgText";
import ProfileList from "../ProfileList/ProfileList";
import css from "./Profile.module.css"

export default function Profile (props) {
    return (
        <div className={css.container}>
            <ProfileImgText
                name={props.username}
                tag={props.tag}
                location={props.location}
                image={props.avatar} />

            <ProfileList
                stats={props.stats} />
        </div>
    );
}