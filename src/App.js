import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: {},
      repos: [],
      loading: false,
      showAlert: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      'https://api.github.com/users?client_id="9a51da519e4e62f5dc54"&client_secret="8462106e72fc1a707da3d36c4f7f445e7ded85ba"'
    );

    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async text => {
    if (text !== '') {
      this.setState({ loading: true });

      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id="9a51da519e4e62f5dc54"&client_secret="8462106e72fc1a707da3d36c4f7f445e7ded85ba"`
      );

      this.setState({
        users: res.data.items,
        loading: false,
        showAlert: false
      });
    } else {
      this.setState({ showAlert: true });
      setTimeout(() => this.setState({ showAlert: false }), 3000);
    }
  };

  getUser = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id="9a51da519e4e62f5dc54"&client_secret="8462106e72fc1a707da3d36c4f7f445e7ded85ba"`
    );

    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async username => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id="9a51da519e4e62f5dc54"&client_secret="8462106e72fc1a707da3d36c4f7f445e7ded85ba"`
    );

    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      user: {},
      loading: false,
      showAlert: false
    });
  };

  render() {
    const { users, user, repos, loading, showAlert } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      showAlert={showAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    lodaing={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
