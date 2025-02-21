import userData from "../userData.json"
import friends from "../friends.json"

import Profile from "./Profile/Profile"
import FriendList from  "./FriendList/FriendList"


export default function App () {
  return (
    <>
      <Profile userData={userData} />
      
      <FriendList friends={friends} />
    </>
  );
};