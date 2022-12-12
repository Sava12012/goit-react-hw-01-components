import UserCard from "./userCard"
import user from '../data/user'

export default function App() {
    return <div>
        <UserCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
    //   stats={user.stats}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    </div>
}