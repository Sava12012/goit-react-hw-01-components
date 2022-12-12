import UserCard from "./userCard/userCard"
import user from '../data/user'

export default function App() {
    return <div>
        <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    </div>
}