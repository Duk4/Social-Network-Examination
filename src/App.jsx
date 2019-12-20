import React from 'react';
import users from './data.json';

class App extends React.Component {
  render() {
    console.log(users);
    return (
      <div className="App" >
        Fuck code tests!
      </div>
    )
  }
}

export default App;