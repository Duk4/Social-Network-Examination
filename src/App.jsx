import React from 'react';
import GroupList from './components/GroupList';
import users from './data.json';
import './styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <section className="header">
          <h1>Social Network</h1>
        </section>
        <section className="group">
          <h3>My Group</h3>
          <section className="group-list">
            <GroupList users={users} />
          </section>
        </section>
      </div>
    )
  }
}

export default App;