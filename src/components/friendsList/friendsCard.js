// import PropTypes from "prop-types";
export default function FriendsCard({ isOnline, avatar, name }) {
    return (
            <li class="item">
                <span class="isOnline">{isOnline}</span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
            </li>
    ) 
}
