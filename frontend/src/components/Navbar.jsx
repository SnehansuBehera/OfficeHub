
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/userApiSlice';
import { logout } from '../redux/features/auth/authSlice';

const NavigationBar = ({ handleShow }) => {
  const { employeeInfo } = useSelector(state => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();

  const handlelogout = async () => {
    try {
      await logoutApiCall();
      dispatch(logout());

    } catch (error) {
      console.error('Error during authentication:', error.response ? error.response.data : error.message);
    }
  }
  return (

    <Navbar bg="primary" variant="dark" expand="lg" className="navbar sticky-top"   >
      <div className="container-fluid">
        <a className="navbar-brand">Office Manager</a>
        {employeeInfo && <div className="d-flex" >
          <button className="btn btn-success" onClick={handlelogout} type="submit">Logout</button>
        </div>}
      </div>
    </Navbar>


  );
};

export default NavigationBar;