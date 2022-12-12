export default function UserCard({ username, tag, location, avatar, stats: { followers, views, likes } }) {
  return (
    <div>
      <img src={avatar} alt="User Avatar" width="480" />
      <h2>{username}</h2>
      <p>{tag}</p>
      <p>{location}</p>
      <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
    </div>
  );
}