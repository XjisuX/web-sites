const LIST_SITES_ENDPOINT = 'https://interview.staging.atresplayer.com/sites';
const BASE_SITE_ENDPOINT = "https://interview.staging.atresplayer.com/site/"

export const fetchSites = async () => {
  try {
    const response = await fetch(LIST_SITES_ENDPOINT);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Error fetching sites');
  }
};

export const getSite = async ({ idSite }) => {
  try {
    const response = await fetch(BASE_SITE_ENDPOINT + idSite);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error searching site');
  }
};

export const putSite = async ({ idSite, name, description, path, publicPath, key }) => {
  try {
    const response = await fetch(BASE_SITE_ENDPOINT+idSite, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name, description, path, publicPath, key })
    });
    return response;
  } catch (error) {
    throw new Error('Error updating site');
  }
}

export const deleteSite = async ({ idSite }) => {
  try {
    const response = await fetch(BASE_SITE_ENDPOINT+idSite, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    throw new Error('Error deleting site');
  }
}