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
    throw new Error('Error searching sites');
  }
};
