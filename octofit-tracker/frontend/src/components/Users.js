import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://turbo-eureka-wrvwpq66vvc9gg4-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Users</h1>
      <Card className="mb-4">
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Users;