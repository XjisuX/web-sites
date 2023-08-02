import { useState, useEffect } from 'react';
import { fetchSites } from '../services/siteService';

export const useSites = () => {
  const [sites, setSites] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const listSites = () => {
    // Recuperamos el listado de Sites
    setLoading(true);
    fetchSites()
      .then(dataSites => setSites(dataSites))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(listSites, []);

  return { sites, loading, error };
};
