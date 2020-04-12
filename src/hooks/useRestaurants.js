import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const searchApi = async searchValue => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchValue,
          location: 'helsinki'
        }
      });
      setResults(response.data.businesses);
    } catch(err) {
      console.log(err);
      setShowErrorDialog(true);
    }
  }

  useEffect(() => {
    searchApi('sushi');

    //return () => {};
  }, [])

  return [searchApi, results, showErrorDialog];
}