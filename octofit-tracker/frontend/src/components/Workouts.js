import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://turbo-eureka-wrvwpq66vvc9gg4-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Workouts</h1>
      <Card className="mb-4">
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Workout Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Workouts;