import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Container className="d-flex justify-content-center mb-4">
      <Col xs={12} lg={10}>
        <Card>
          <Card.Header className="bg-dark text-light p-2">Login</Card.Header>
          <Card.Body>
            {data ? (
              <p>
                You are now logged in!{' '}
                <Link to="/">Home</Link>
              </p>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="******"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Submit
                </Button>
              </Form>
            )}

            {error && (
              <Alert variant="danger" className="my-3 p-3">
                {error.message}
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Login;