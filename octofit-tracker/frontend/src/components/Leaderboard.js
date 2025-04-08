import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://turbo-eureka-wrvwpq66vvc9gg4-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Leaderboard</h1>
      <Card className="mb-4">
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry._id}>
                  <td>{entry.user.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Leaderboard;