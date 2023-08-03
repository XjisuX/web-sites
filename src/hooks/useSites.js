import { useState, useEffect } from 'react';
import { deleteSite, fetchSites, getSite, postSite, putSite } from '../services/siteService';

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

  const updateSite = async ({ idSite, name, description, path, publicPath, key }) => {
    setLoading(true)
    setError(null);
    try {
      const response = await putSite({ idSite, name, description, path, publicPath, key })
      if (response.status === 400) {
        setError("Error: El Nombre y la Ruta ya existen");
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const removeSite = async ({ idSite }) => {
    setLoading(true)
    setError(null);
    try {
      const response = await deleteSite({ idSite })
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const newSite = async ({ name, description, path, publicPath, key }) => {
    setLoading(true)
    try {
      const response = await postSite({ name, description, path, publicPath, key });
      if (response.status === 400) {
        setError("Error: El Nombre y la Ruta ya existen");
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (type === 'list') listSites();
    else if (type === 'search') searchSite({ idSite });
  }, [idSite, type]);

  return { sites, loading, error, updateSite, removeSite, newSite };
};
