import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AuthorsView from './AuthorsView';
import BASE_URL from '../../constants';

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const AUTHORS_URL = `${BASE_URL}/authors`;

  useEffect(() => {
    setDeleted(false);
    Axios.get(AUTHORS_URL)
      .then(res => setAuthors(res.data))
      .catch(err => console.log(err));
  }, [AUTHORS_URL, deleted]);

  const handleDelete = (id) => {
    Axios.delete(`${AUTHORS_URL}/${id}`)
      .then(res => setDeleted(true));
  }

  return <AuthorsView authors={authors} handleDelete={handleDelete} />;
}

export default AuthorsList;
