import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 'id1',
          login: 'octocot_one',
          avatar_url:
            'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
          html_url: 'https://github.com/octocat'
        },
        {
          id: 'id2',
          login: 'octocot_two',
          avatar_url:
            'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
          html_url: 'https://github.com/octocat'
        },
        {
          id: 'id3',
          login: 'octocot_three',
          avatar_url:
            'https://avatars0.githubusercontent.com/u/583231?s=460&v=4',
          html_url: 'https://github.com/octocat'
        }
      ]
    };
  }

  render() {
    const { users } = this.state;

    return (
      <div style={userStyle}>
        {users.map(user => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
