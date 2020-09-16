import React from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { Link } from '@reach/router';
import './Authors.css';

const AuthorsView = ({authors, handleDelete}) => {
  return (
    <Row className="Authors">
      <Col md={8}>
        <h1>Authors List</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map((author, i) => {
                return <tr key={i}>
                  <td>{author.name}</td>
                  <td>
                    <Link to={`/authors/${author._id}/edit`}><Button>Edit</Button></Link>
                    <Button onClick={e => handleDelete(author._id)} variant="danger">Delete</Button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default AuthorsView;