import React from 'react';
import FriendList from './components/FriendsList/FriendList.jsx';
import friends from './components/FriendsList/friends.json';
import Profile from './components/social-profile/Profile.jsx';
import user from './components/social-profile/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import statisticsData from './components/Statistics/data.json';
import TransactionHistory from './components/transaction-history/TransactionHistory.jsx';
import transactions from './components/transaction-history/transactions.json';


const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticsData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
