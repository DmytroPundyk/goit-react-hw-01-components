import React from 'react';
import FriendList from './components/FriendsList/FriendList';
import friends from './components/FriendsList/friends.json';
import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';


const App = () => (
  <>
    {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
    <FriendList friends={friends} />
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    {/* <TransactionHistory items={transactions} /> */}
  </>
);

export default App;
