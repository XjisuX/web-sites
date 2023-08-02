const LIST_SITES_ENDPOINT = 'https://interview.staging.atresplayer.com/sites';

export const fetchSites = async () => {
  try {
    const response = await fetch(LIST_SITES_ENDPOINT);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error('Error fetching sites');
  }
};