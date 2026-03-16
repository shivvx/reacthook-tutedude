import { useState, useEffect, useCallback } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('useFetch: Starting fetch for', url);
      const response = await fetch(url);
      console.log('useFetch: Response status:', response.status);
      if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
      const result = await response.json();
      console.log('useFetch: Data received, length:', Array.isArray(result) ? result.length : 'not an array');
      setData(result);
    } catch (err) {
      console.error('useFetch: Fetch error:', err);
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
      console.log('useFetch: Loading finished.');
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { data, loading, error };
};
export default useFetch;
