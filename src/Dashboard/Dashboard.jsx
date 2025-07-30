import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  function fetchData() {
    fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5 p-4 shadow-sm rounded bg-light">
      <h3 className="mb-4 text-center text-primary fw-bold">📋 Project Dashboard</h3>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>#</th>
            <th>Created At</th>
            <th>Project Name</th>
            <th>Details</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Priority</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((p, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{p.createdAt}</td>
                <td>{p.ProjectName}</td>
                <td>{p.Details}</td>
                <td>{p.startDate}</td>
                <td>{p.EndDate}</td>
                <td>
                  <span className={`badge ${p.priority === 'High' ? 'bg-danger' : p.priority === 'Medium' ? 'bg-warning text-dark' : 'bg-success'}`}>
                    {p.priority}
                  </span>
                </td>
                <td>{p.Department}</td>
                <td>
                  <span className={`badge ${p.status === 'Completed' ? 'bg-success' : p.status === 'In Progress' ? 'bg-warning text-dark' : 'bg-secondary'}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-muted py-3">No Projects available</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
