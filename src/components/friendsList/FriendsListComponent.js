import PropTypes from "prop-types";
import FriendsCard from "./FriendsCardComponent"
import css from './FriendsCardComponent.module.css'
import { coinRandom } from '../Random_Function'
export default function FriendsList({ friends }) {
    return (
        <ul className={css.friendlist}>
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
    )
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};