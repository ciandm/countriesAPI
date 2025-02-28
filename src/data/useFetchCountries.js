import { useState, useEffect } from 'react';

export const useFetchCountries = (query, ref, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(`https://restcountries.eu/rest/v2${query}`);
          await res.json()
            .then(res => {
              setData(res);
            })
        } catch (err) {
          setError(err.status);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [query, ref])
  return {
    data,
    error,
    loading
  }
}