import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination Logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

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
          {currentProjects.length > 0 ? (
            currentProjects.map((p, i) => (
              <tr key={p.id}>
                <td>{startIndex + i + 1}</td>
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
              <td colSpan="9" className="text-muted text-center py-3">No Projects available</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-between mt-3">
        <Button variant="primary" onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>

        <div className="align-self-center">
          Page {currentPage} of {totalPages}
        </div>

        <Button variant="primary" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
