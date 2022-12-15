// import PropTypes from "prop-types";
import FriendsCard from "./friendsCard"
import { coinRandom } from '../randomFunction'
export default function FriendsList({ friends }) {
    return (
        <ul>
            {friends.map(({ id, avatar, name, }) => (
                    <FriendsCard
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={coinRandom()}
                        />
                    )
                )
            }
        </ul>
    );
};