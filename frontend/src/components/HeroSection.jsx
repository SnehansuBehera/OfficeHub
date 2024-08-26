import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const HeroSection = ({ handleShow }) => {
  const navigate = useNavigate();
  const { employeeInfo } = useSelector((state) => state.auth);
  const direct = () => {
    navigate('/admin/dashboard');
  }
  const directEmployee = () => {
    navigate('/employee/dashboard');
  }
  return (
    <header className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-4">Manage Your Office Efficiently</h1>
        <p className="lead">Our office management system streamlines workflows and enhances productivity.</p>
        {employeeInfo ?
          <>
            {employeeInfo.isAdmin ? <Button variant="success" size="lg" onClick={direct}>Dashboard</Button> : <Button variant="success" size="lg" onClick={directEmployee}>Dashboard</Button>}
          </> :
          <Button variant="success" size="lg" onClick={handleShow}>Get Started</Button>
        }
      </div>
    </header >
  );
};

export default HeroSection;