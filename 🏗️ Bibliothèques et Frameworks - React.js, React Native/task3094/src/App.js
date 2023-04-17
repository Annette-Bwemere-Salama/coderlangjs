import React from 'react';
import User from './User';

class App extends React.Component {
  state = {
    users: [
      {
        id: 1,
        role: 'admin',
        permissions: ['CREATE', 'READ', 'UPDATE', 'DELETE'],
        details: {
          name: 'Jon Snow',
          email: 'john.snow@winter.com'
        },
      },
      {
        id: 2,
        role: 'user',
        permissions: ['READ', 'UPDATE'],
        details: {
          name: 'Daenerys Targaryen',
          email: 'daenerys_targaryen@mother.com'
        },
      },
      {
        id: 3,
        role: 'guest',
        details: {
          name: 'Oberyn Martell',
          email: 'oberyn_martell@eyes.com'
        }
      }
    ]
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map(user => <User key={user.id} {...user} />)}
      </div>
    );
  }

}

export default App;
