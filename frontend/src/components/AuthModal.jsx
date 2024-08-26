import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useLoginMutation, useRegisterMutation } from '../redux/api/userApiSlice';
import Loader from '../assets/Loader';
import { useDispatch } from 'react-redux';
import { setcredentials } from '../redux/features/auth/authSlice';

const AuthModal = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [login, { isLoading }] = useLoginMutation();
  const [register] = useRegisterMutation();



  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  const dispatch = useDispatch();

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      if (isSignup) {
        const response = await register({ username: name, email, password, role }).unwrap();
        console.log('User signed up successfully:', response);
        dispatch(setcredentials({ ...response }));

      } else {
        const response = await login({ email, password }).unwrap();
        console.log('User logged in successfully:', response);
        dispatch(setcredentials({ ...response }));
      }
      handleClose();
    } catch (error) {
      console.error('Error during authentication:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data : "An error occurred");
    }
  };





  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={loginUser}>
          {isSignup && (
            <>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)} required>
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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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


          <Button variant="primary" type="submit" className="w-100 mt-3">
            {!isLoading ? (isSignup ? 'Sign Up' : 'Login') : <Loader />}

          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;