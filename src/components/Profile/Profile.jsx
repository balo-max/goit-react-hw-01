import userData from "../../userData.json"
import ProfileImgText from "../ProfileImgText/ProfileImgText";
import ProfileList from "../ProfileList/ProfileList";
import css from "./Profile.module.css"

export default function Profile () {
    return (
        <div className={css.container}>
            <div>
                <ProfileImgText
                    name={userData.username}
                    tag={userData.tag}
                    location={userData.location}
                    image={userData.avatar} />
            </div>
            <ProfileList
                stats={userData.stats } />
        </div>
    );
}