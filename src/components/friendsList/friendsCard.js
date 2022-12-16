import PropTypes from "prop-types";
import css from '../friendsList/friendsCard.module.css'

export default function FriendsCard({ isOnline, avatar, name }) {
    return (
      <li className={css.item}>
        <span className={isOnline ? css.isonline : css.isoffline}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
    ) 
}

FriendsCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}