// UserCard
import UserCard from './userCard/UserCardComponent'
import user from '../data/user.json'

//Statistics
import Statistics  from './statistics/StatisticsComponent'
import statisticsData from '../data/data.json'

//FriendsList
import FriendList from './friendsList/FriendsListComponent'
import friends from '../data/friends.json'

// TransactionHistory
import TransactionHistory  from './transactionHistory/TransactionComponent'
import transactions from '../data/transactions.json'

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
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
        
    </div>
)}