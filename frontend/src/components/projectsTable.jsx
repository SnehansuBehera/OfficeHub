import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectsTable() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects/all');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="table-responsive small employees-table">
      <h4>Project Details :</h4>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project</th>
            <th scope="col">Description</th>
            <th scope="col">Deadline</th>
            <th scope="col">Lead</th>
            <th scope="col">Employees</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <tr key={project._id}>
                <td>{index + 1}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{new Date(project.deadline).toLocaleDateString()}</td>
                <td>{project.lead?.username || 'N/A'}</td>
                <td>
                  <select className="form-select">
                    {project.employees.map((employee) => (
                      <option key={employee._id} value={employee._id}>
                        {employee.username}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No projects found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
