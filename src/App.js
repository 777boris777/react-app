import React from 'react';
import Home from './component/home/home';
import { Route, Switch } from 'react-router';
import Posts from './component/posts/posts';
import OtherProfile from './component/otherProfile/otherProfile';
import Profile from './component/myProfile/profile';
import './App.css';

class App extends React.Component {
  state = {
    postinfo: [

    ]
  }

  fetchData = async () => {
    try {
      const data = await fetch('https://immense-bastion-77462.herokuapp.com/posts')
      const fetchedData = await data.json()
      this.setState({ postinfo: fetchedData })
    }
    catch (error) {
      console.log(error.message)
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    console.log(this.state.postinfo);
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts' exact render={() =>
            <Posts
              posts={this.state.postinfo}
            />} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/guest/:id' exact component={OtherProfile} />
        </Switch>
      </div>
    );
  }
}
export default App;
