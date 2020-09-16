import React from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';
import './AuthorForm.css';

const AuthorFormView = ({handleSubmit, author, errors}) => {
  return (
    <Row className="AuthorForm">
      <Col md={5}>
        <h2>{(author.name) ? `Update ${author.name}` : 'Add a New Author'}</h2>
        <Form onSubmit={handleSubmit} className="Form">
          {
            errors.map(message => <Alert variant="danger">{message}</Alert>)
          }

          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              as="input"
              name="name"
              type="text"
              minLength="3"
              defaultValue={(author) ? author.name : ''}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="btn">
            {(author.name) ? "Update Author" : "Add Author"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default AuthorFormView;
