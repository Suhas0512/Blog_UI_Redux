import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import UserShow from './components/UserShow';
import PostsShow from './components/PostsShow';


function App() {
  return(
    <BrowserRouter>
    <div>
      <h2><Link to="/">Home</Link>||
      <Link to="/users">Users</Link>||
      <Link to="/posts">Posts</Link></h2>

      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/users" component={Users} exact={true}></Route>
      <Route path="/users/:id" component={UserShow}></Route>
      <Route path="/posts" component={Posts} exact={true}></Route>
      <Route path="/posts/:id" component={PostsShow}></Route>
    </div>
    </BrowserRouter>
  )
}

export default App;