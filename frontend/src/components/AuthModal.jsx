import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AuthModal = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {isSignup && (
            <>
              {/* Name Field */}
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              {/* Role Dropdown */}
              <Form.Group controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" defaultValue="Select Role">
                  <option disabled>Select Role</option>
                  <option>Manager</option>
                  <option>Boss</option>
                  <option>Lead</option>
                  <option>Frontend Dev</option>
                  <option>Backend Dev</option>
                  <option>DevOps Eng</option>
                  <option>UI/UX Dev</option>
                  <option>SDE</option>
                  <option>Intern</option>
                </Form.Control>
              </Form.Group>
            </>
          )}

          {/* Email Field */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          {/* Confirm Password Field (Only for Signup) */}
          {isSignup && (
            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
            </Form.Group>
          )}

          {/* Account Status Toggle Text */}
          <div className="text-center mt-3">
            {isSignup ? (
              <>
                <p>
                  Already have an account?{' '}
                  <Button variant="link" onClick={toggleAuthMode}>
                    Login here
                  </Button>
                </p>
              </>
            ) : (
              <>
                <p>
                  Don't have an account?{' '}
                  <Button variant="link" onClick={toggleAuthMode}>
                    Sign up here
                  </Button>
                </p>
              </>
            )}
          </div>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100 mt-3">
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
