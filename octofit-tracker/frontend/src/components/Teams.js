import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://turbo-eureka-wrvwpq66vvc9gg4-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Teams</h1>
      <Card className="mb-4">
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Team Name</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Teams;