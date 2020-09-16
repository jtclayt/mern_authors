import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';
import AuthorFormView from './AuthorFormView';
import BASE_URL from '../../constants';

const AuthorForm = ({id}) => {
  const NEW_AUTHOR_URL = `${BASE_URL}/authors`;
  const AUTHOR_URL = `${BASE_URL}/authors/${id}`;
  const [author, setAuthor] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (id) {
      Axios.get(AUTHOR_URL)
        .then(res => setAuthor(res.data))
        .catch(err => console.log(err));
    }
  }, [id, AUTHOR_URL]);

  const handleSubmit = e => {
    e.preventDefault();
    const postData = {name: e.target['name'].value};

    if (id) {
      Axios.put(AUTHOR_URL, postData)
        .then(res => navigate('/authors'))
        .catch(err => setErrors(err.response.data.errors.map(err => err.message)));
    } else {
      Axios.post(NEW_AUTHOR_URL, postData)
        .then(res => navigate('/authors'))
        .catch(err => {
          console.log(err.response.data.errors)
          setErrors(Object.values(err.response.data.errors).map(err => err.message));
        });
    }
  }


  return <AuthorFormView
    handleSubmit={handleSubmit}
    author={author}
    errors={errors} />;
}

export default AuthorForm;
