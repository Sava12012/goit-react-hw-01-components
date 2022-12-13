// UserCard
import UserCard from './userCard/userCard'
import user from '../data/user.json'

//Statistics
import Statistics  from './statistics/statistics'
import statisticsData from '../data/data.json'


export default function App() {
  return (
    <div>
      <div>
        <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={statisticsData} />
      </div>
        
    </div>
)}