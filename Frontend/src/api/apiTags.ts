import { fetchAutoRefresh } from './apiToken';

export const tags = async () => {
  try {
    const response = await fetchAutoRefresh('http://localhost:3000/tags', {
      method: 'POST',
      credentials: 'include',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const addTag = async (tag: string) => {
  try {
    const response = await fetchAutoRefresh('http://localhost:3000/addTag', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tag }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
