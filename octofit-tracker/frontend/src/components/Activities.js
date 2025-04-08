import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://turbo-eureka-wrvwpq66vvc9gg4-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h1 className="display-5">Activities</h1>
      <Card className="mb-4">
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Activity Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Activities;