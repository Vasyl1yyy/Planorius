import { fetchAutoRefresh } from './apiToken';

export const tasks = async () => {
  try {
    const response = await fetchAutoRefresh('http://localhost:3000/tasks', {
      method: 'POST',
      credentials: 'include',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const addTasks = async (
  title: string,
  difficulty: number,
  proirity: number,
  tag: number,
  date: string
) => {
  try {
    const response = await fetchAutoRefresh('http://localhost:3000/addTasks', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, difficulty, proirity, tag, date }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
