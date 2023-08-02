import { useState, useEffect } from 'react';
import { fetchSites, getSite } from '../services/siteService';

export const useSites = ({ type, idSite }) => {
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

  const searchSite = ({ idSite }) => {
    // Recuperamos el site en específico
    setLoading(true);
    getSite({ idSite })
      .then(data => setSites(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (type === 'list') listSites();
    else if (type === 'search') searchSite({ idSite });
  }, []);

  return { sites, loading, error };
};
