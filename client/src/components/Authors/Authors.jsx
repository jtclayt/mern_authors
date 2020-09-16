import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AuthorsView from './AuthorsView';
import BASE_URL from '../../constants';

const AuthorsList = () => {
  const [authors, setAuthors] = useState({});
  const AUTHORS_URL = `${BASE_URL}/authors`;

  useEffect(() => {
    Axios.get(AUTHORS_URL)
      .then(res => setAuthors(res.data))
      .catch(err => console.log(err));
  }, [AUTHORS_URL])

  return <AuthorsView authors={authors} />;
}

export default AuthorsList