import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GroupList from './components/GroupList';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" >
        <section className="header">
          <h1><a href="/">Social Network</a></h1>
        </section>
        <Switch>
          <Route exact path="/" component={GroupList} />
          <Route exact path="/users/:id" component={UserProfile} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;