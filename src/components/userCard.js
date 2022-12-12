export default function UserCard({ username, tag, location, avatar, stats, followers, views, likes }) {
  return (
    <div>
      <h2>{username}</h2>
      <p>{tag}</p>
      <p>{location}</p>
      <img src={avatar} alt="User Avatar" width="480" />
      <p>Stats:</p>
      <span>{followers}</span>
      <span>{views}</span>
      <span>{likes}</span>
    </div>
  );
}